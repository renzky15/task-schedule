import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import TaskReducer from "../reducers/TaskReducer"
import thunk from "redux-thunk"

export default () => {
    const composeEnhancer =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const store = createStore(
        combineReducers({
            task_payload: TaskReducer,
        }),
        composeEnhancer(applyMiddleware(thunk))
    )
    return store
}
