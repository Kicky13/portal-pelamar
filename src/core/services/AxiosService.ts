import axios from 'axios'

// env
const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 360000,
  headers: { 'Cache-Control': 'no-cache' },

  // headers: { 'Access-Control-Allow-Origin': '*', 'Content-type': 'application/json' },
})

apiClient.interceptors.request.use(request => {
  const accessToken = window.localStorage.getItem('id_token')
  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`
  }
  return request
})

apiClient.interceptors.response.use(undefined, error => {
  // Errors handling
  const { response } = error
  const { data } = response
  if (data) {
    // notification.warning({
    //   message: data,
    // })
    console.log(`---------log`,data);
  }
})

export default apiClient
