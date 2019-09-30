

import axios from 'axios';


const topicInstance = axios.create({
  timeout: 7000
})

topicInstance.interceptors.request.use(
  (config) => {

    return config
  },
  (err) => {

    return Promise.reject(err)
  }
)

topicInstance.interceptors.response.use(
  (res) => {

    return res.data
  },
  (err) => {

    return Promise.reject(err)
  }
)

export default topicInstance;