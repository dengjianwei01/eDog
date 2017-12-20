import axios from 'axios'
export function getAxios(type) {
  const url = '/api/'+ type
  return axios.get(url)
}
