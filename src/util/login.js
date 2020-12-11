import axios from "axios"
const payload = {
    email: "spicebluetest1@gmail.com",
    password: "12345678",
}
export async function login() {
    const config = {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
    try {
        const res = await axios.post(
            "https://stage.api.sloovi.com/login",
            payload,
            config
        )

        localStorage.setItem(
            "login",
            JSON.stringify({
                login: true,
                token: res.data.results.token,
            })
        )
    } catch (error) {
        console.log("Post not created.")
    }
}
