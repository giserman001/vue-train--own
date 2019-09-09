import axios from 'axios';
import router from '../router/router'
import { Loading, Message } from 'element-ui'
import storage from '@/lib/storage'
import qs from 'qs'
import envConfig from '../config'
console.log(envConfig)

// 每个请求的拦截器方法可能不一样
class AjaxRequest {
  public baseURL: string
  public timeout: number
  public headers: any
  public loadingInstance: any
  constructor() {
    this.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/'
    this.timeout = 2000
    this.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
  }
  public request(config: any) { // 用户请求设置的方法
    const instance = axios.create({
      baseURL: this.baseURL,
      timeout: this.timeout
    });
    // 设置拦截器
    // tslint:disable-next-line: no-shadowed-variable
    instance.interceptors.request.use((config) => {
      console.log(config)
      if (config.method === 'post'
        && config.headers.post['Content-Type'].indexOf('application/x-www-form-urlencoded') !== -1) {
        config.data = qs.stringify(config.data, {
          allowDots: true
        })
      }
      // 设置请求头
      if (storage.get('token')) {
        config.headers.token = storage.get('token')
      }
      config.headers.token = 'cce4fa22-93e2-40fb-8a5b-cb39915601fa'
      this.loadingInstance = Loading.service({
        fullscreen: true
      })
      return config;
    }, (err) => {
      return Promise.reject(err)
    })
    // 设置响应拦截器
    instance.interceptors.response.use((res: any) => {
      if (this.loadingInstance) {
        this.loadingInstance.close()
      }
      if (!res.data.status && res.data.code === '20006') {
        router.push({
          path: '/login'
        })
        return new Promise(() => {console.log('build')})
      }
      if (res.data.status) {
        return res.data
      } else {
        if (!res.config.errorCallback) {
          Message({
            message: res.data.msg,
            type: 'error',
            center: true
          })
        } else if (typeof res.config.errorCallback === 'function') {
          res.config.errorCallback()
        } else {
          console.error('errorCallback should be a function')
        }
        // return new Promise(() => {})
        return Promise.reject(res)
      }
    }, (err) => {
      return Promise.reject(err)
    })
    return instance(config)
  }
}
export default new AjaxRequest()
