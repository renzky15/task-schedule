// ADD Task
import { v1 as uuid } from "uuid"
export const addTask = ({
    assigned_user = "",
    task_date = "",
    task_time = "",
    task_msg = "",
} = {}) => ({
    type: "ADD_TASK",
    task_payload: {
        id: uuid(),
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
