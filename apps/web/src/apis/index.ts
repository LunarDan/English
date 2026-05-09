import axios from 'axios'

export const timeout = 50000
export const serverApi = axios.create({
  baseURL: '/api/v1',
  timeout,
})

serverApi.interceptors.response.use(res => res.data)


export const aiApi = axios.create({
  baseURL: '/api/v1/ai',
  timeout,
})

aiApi.interceptors.response.use(res => res.data)


export interface Response<T = any> {
  code: number
  message: string
  data: T
  timestamp: number
  path: string
  success: boolean
}
