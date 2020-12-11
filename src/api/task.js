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
