import axios from 'axios';


const homeInstance = axios.create({
  timeout: 7000
})

homeInstance.interceptors.request.use(
  (config) => {

    return config
  },
  (err) => {

    return Promise.reject(err)
  }
)


homeInstance.interceptors.response.use(
  (res) => {

    return res.data
  },
  (err) => {

    return Promise.reject(err)
  }
)


export default homeInstance;