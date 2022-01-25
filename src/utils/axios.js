import axios from 'axios'

if (process.env.NODE_ENV == 'production') {
  console.log('producao')
} else {
  console.log('dev')
  console.log(process.env)
}

export default axios.create({
  baseURL: process.env.VUE_APP_API_URL
})
