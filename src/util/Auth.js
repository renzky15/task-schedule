import React, { useEffect, useState } from "react"
import { getUser, login } from "../api/task"

export const AuthContext = React.createContext()
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)

    const [pending, setPending] = useState(true)

    useEffect(() => {
        async function handleLogin() {
            await login()
            if ("login" in localStorage) {
                try {
                    await getUser().then((result) => {
                        localStorage.setItem(
                            "currentUser",
                            JSON.stringify({
                                result,
                            })
                        )
                        setCurrentUser(result)
                        setPending(false)
                    })
                } catch (error) {}
            }
        }
        handleLogin()
    }, [])

    if (pending) {
        return <div className="loader"></div>
    }

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    )
}
