import axios from '../lib/axios'

export const getTest = (): any => {
  return axios.request({url: '/authCode'})
}
