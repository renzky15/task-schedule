import { createStore, combineReducers } from "redux"
import TaskReducer from "../reducers/TaskReducer"

export default () => {
    const store = createStore(
        combineReducers({
            task_payload: TaskReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}
