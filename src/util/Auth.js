import React, { useEffect, useState } from "react"
import { login } from "../util/login"
import { getUser } from "../api/task"

export const AuthContext = React.createContext()
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)

    const [pending, setPending] = useState(true)
    const payload = {
        email: "spicebluetest1@gmail.com",
        password: "12345678",
    }

    useEffect(() => {
        if (login(payload)) {
            getUser().then((result) => {
                setCurrentUser(result)
                setPending(false)
                localStorage.setItem(
                    "currentUser",
                    JSON.stringify({
                        result,
                    })
                )
            })
        }
    }, [payload])

    if (pending) {
        return <div className="loader"></div>
    }

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    )
}
