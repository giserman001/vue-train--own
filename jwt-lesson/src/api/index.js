import axios from '../lib/axios'

export const getTest = () => {
  return axios.request({url: '/test'})
}
export const login = (username) => {
  return axios.request({url: '/login', method: 'post', data: {username}})
}
export const validate = () => {
  return axios.request({url: '/validate'})
}
