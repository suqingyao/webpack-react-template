import type { AxiosError, AxiosRequestConfig, Canceler } from 'axios'
// eslint-disable-next-line unicorn/prefer-node-protocol
import process from 'process'
import { ResultEnum } from '@/config/enum'
import NProgress from '@/config/nprogress'
import { showFullScreenLoading, tryHideFullScreenLoading } from '@/config/serviceLoading'
import { message } from 'antd'
import axios from 'axios'
import qs from 'qs'
import { isFunction } from './is'

let pendingMap = new Map<string, Canceler>()

export const getPendingUrl = (config: AxiosRequestConfig) => [config.method, config.url, qs.stringify(config.data), qs.stringify(config.params)].join('&')
class AxiosCanceler {
  addPending(config: AxiosRequestConfig) {
    this.removePending(config)
    const url = getPendingUrl(config)
    config.cancelToken
      = config.cancelToken
        || new axios.CancelToken((cancel) => {
          if (!pendingMap.has(url)) {
            pendingMap.set(url, cancel)
          }
        })
  }

  removePending(config: AxiosRequestConfig) {
    const url = getPendingUrl(config)
    if (pendingMap.has(url)) {
      const cancel = pendingMap.get(url)
      cancel && cancel(url)
      pendingMap.delete(url)
    }
  }

  removeAllPending() {
    pendingMap.forEach((cancel) => {
      cancel && isFunction(cancel) && cancel()
    })
    pendingMap.clear()
  }

  resetPending() {
    pendingMap = new Map<string, Canceler>()
  }
}

const axiosCanceler = new AxiosCanceler()

const http = axios.create({
  baseURL: process.env.API_URL,
  timeout: 100000,
  withCredentials: true,
})

http.interceptors.request.use(
  (config) => {
    NProgress.start()

    axiosCanceler.addPending(config)

    config.headers!.noLoading || showFullScreenLoading()
    // TODO set token
    const token = 'xxx'
    config.headers.Authorization = `Bearer ${token}`

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

http.interceptors.response.use(
  (response) => {
    const { data, config } = response
    NProgress.done()

    axiosCanceler.removePending(config)
    tryHideFullScreenLoading()

    if (data.code === ResultEnum.OVERDUE) {
      // TODO reset token
      message.error(data.msg)
      window.location.href = '/login'
      return Promise.reject(data)
    }

    if (data.code && data.code !== ResultEnum.SUCCESS) {
      message.error(data.msg)
      return Promise.reject(data)
    }

    return data
  },
  (error: AxiosError) => {
    const { response } = error
    console.warn('🚀 ~ response:', response)
    NProgress.done()
    tryHideFullScreenLoading()
    if (error.message.includes('timeout')) {
      message.error('请求超时，请稍后再试')
    }

    // 服务器结果都没有返回(可能服务器错误可能客户端断网) 断网处理:可以跳转到断网页面
    if (!window.navigator.onLine)
      window.location.hash = '/500'
    return Promise.reject(error)
  },
)

export default http
