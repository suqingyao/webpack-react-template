export interface Result {
  code: string
  msg: string
}

export interface ResultData<T = any> extends Result {
  data?: T
}

export interface ResultPage<T> {
  datalist: T[]
  pageNum: number
  pageSize: number
  total: number
}

export interface RequestPage {
  pageNum: number
  pageSize: number
}

export interface LoginRequestForm {
  username: string
  password: string
}

export interface LoginResponseLogin {
  access_token: string
}
