import axios from "axios"

export async function getUser() {
    const token = JSON.parse(localStorage.getItem("login"))
    const config = {
        Authorization: "Bearer " + token.token,
        Accept: "application/json",
        "Content-Type": "application/json",
    }

    console.log(config)
    try {
        const res = await axios.get("https://stage.api.sloovi.com/user", config)

        return res.data.results
    } catch (error) {
        console.log("Error.")
    }
}
