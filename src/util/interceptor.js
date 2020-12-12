import axios from "axios"
import { login } from "../api/task"

export default () => {
    if ("login" in localStorage) {
        const token = JSON.parse(localStorage.getItem("login"))
        axios.interceptors.request.use(
            (config) => {
                config.headers.authorization = `Bearer ${token.token}`

                return config
            },
            (error) => {
                return Promise.reject(error)
            }
        )
    } else {
        login()
    }
}
