import axios from "axios"

const apiURL = "https://stage.api.sloovi.com"

export async function login() {
    const payload = {
        email: "spicebluetest1@gmail.com",
        password: "12345678",
    }
    const config = {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
    try {
        const res = await axios.post(`${apiURL}/login`, payload, config)

        console.log(JSON.stringify(res))
        localStorage.setItem(
            "login",
            JSON.stringify({
                login: true,
                token: res.data.results.token,
            })
        )

        return res.data.status
    } catch (error) {
        console.log(error.message)
    }
}
export async function getUser() {
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

        try {
            const res = await axios.get(`${apiURL}/user`)

            return res.data.results
        } catch (error) {
            console.log("Error.")
        }
    } else {
        alert("Logging in.....")
    }
}
