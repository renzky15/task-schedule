// ADD Task
import { v1 as uuid } from "uuid"
import axios from "axios"
import interceptor from "../util/interceptor"
const apiURL = "https://stage.api.sloovi.com"

interceptor()
export const addTask = ({
    id = uuid(),
    assigned_user = "",
    task_date = "",
    task_time = 0,
    task_msg = "",
} = {}) => ({
    type: "ADD_TASK",
    task_payload: {
        id,
        assigned_user,
        task_date,
        task_time,
        task_msg,
    },
})
// REMOVE Task
export const removeTask = ({ id } = {}) => ({
    type: "REMOVE_TASK",
    id,
})

export const editTask = (id, updates) => ({
    type: "EDIT_TASK",
    id,
    updates,
})

export function fetchTask() {
    // Instead of plain objects, we are returning function.
    return async function (dispatch) {
        try {
            const res = await axios.get(
                `${apiURL}/task/lead_59a79b6cb211449f9698bad058a593e4`
            )
            dispatch({
                type: "FETCH_TASKS",
                task_payload: res.data.results,
            })

            console.log(res.data.results)
        } catch (error) {
            console.log("Error.")
        }
    }
}

export function postTask(payload) {
    // Instead of plain objects, we are returning function.
    return async function (dispatch) {
        try {
            const res = await axios.post(
                `${apiURL}/task/lead_59a79b6cb211449f9698bad058a593e4`,
                payload
            )
            dispatch({
                type: "ADD_TASK",
                task_payload: payload,
            })

            console.log(res.data.results)
        } catch (error) {
            console.log("Error.")
        }
    }
}

export function deleteTask(id) {
    // Instead of plain objects, we are returning function.
    return async function (dispatch) {
        try {
            const res = await axios.delete(
                `${apiURL}/task/lead_59a79b6cb211449f9698bad058a593e4/${id}`
            )
            dispatch({
                type: "REMOVE_TASK",
            })

            console.log(res.data.results)
        } catch (error) {
            console.log("Error.")
        }
    }
}
