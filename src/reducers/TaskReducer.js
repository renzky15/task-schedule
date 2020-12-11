const taskReducerDefaultState = []

export default (state = taskReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [...state, action.task_payload]
        case "FETCH_TASKS":
            return [...action.task_payload]
        case "REMOVE_TASK":
            return state.filter(({ id }) => id !== action.id)

        case "EDIT_TASK":
            return state.map((task_payload) => {
                if (task_payload.id === action.id) {
                    return {
                        ...task_payload,
                        ...action.updates,
                    }
                } else {
                    return task_payload
                }
            })
        default:
            return state
    }
}
