import "./App.css"
import configStore from "./store/configStore"
import { login } from "./util/login"
import { Provider } from "react-redux"
import { getUser } from "./api/task"
import { addTask } from "./actions/task"
import Task from "./components/Task"

const store = configStore()
const payload = {
    email: "spicebluetest1@gmail.com",
    password: "12345678",
}

login(payload)

function App() {
    return (
        <Provider store={store}>
            <Task />
        </Provider>
    )
}

export default App
