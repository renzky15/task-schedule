import "./App.css"
import configStore from "./store/configStore"
import { Provider } from "react-redux"
import { getAllTask } from "./api/task"
import { addTask } from "./actions/task"
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
