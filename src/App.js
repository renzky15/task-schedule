import "./App.css"
import configStore from "./store/configStore"
import { Provider } from "react-redux"

import Task from "./components/Task"

import { AuthProvider } from "./util/Auth"

const store = configStore()

function App() {
    return (
        <Provider store={store}>
            <AuthProvider>
                <Task />
            </AuthProvider>
        </Provider>
    )
}

export default App
