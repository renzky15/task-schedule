import axios from "axios"
export async function login(payload) {
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
