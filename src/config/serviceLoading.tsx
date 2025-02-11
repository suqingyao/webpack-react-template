import { Loading } from '@/components/loading'
import ReactDOM from 'react-dom/client'

let needLoadingRequestCount = 0

export function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    const dom = document.createElement('div')
    dom.setAttribute('id', 'loading')
    document.body.appendChild(dom)
    ReactDOM.createRoot(dom).render(<Loading />)
  }
  needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0)
    return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    const loading = document.getElementById('loading')
    if (loading) {
      document.body.removeChild(loading)
    }
  }
}
