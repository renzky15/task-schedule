import axios from "axios"

const apiURL = "https://stage.api.sloovi.com"
const token = JSON.parse(localStorage.getItem("login"))
export async function getUser() {
    axios.interceptors.request.use(
        (config) => {
            config.headers.authorization = `Bearer ${token.token}`

            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    try {
        const res = await axios.get(`${apiURL}/user`)

        return res.data.results
    } catch (error) {
        console.log("Error.")
    }
}

export async function postTask(payload) {
    axios.interceptors.request.use(
        (config) => {
            config.headers.authorization = `Bearer ${token.token}`

            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    try {
        const res = await axios.post(
            `${apiURL}/task/lead_59a79b6cb211449f9698bad058a593e4`,
            payload
        )

        return res.data.results
    } catch (error) {
        console.log("Error.")
    }
}
