import axios from "axios"
const token = JSON.parse(localStorage.getItem("login"))
export default () => {
    axios.interceptors.request.use(
        (config) => {
            config.headers.authorization = `Bearer ${token.token}`

            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )
}
