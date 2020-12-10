import { React, Component } from "react"
import TaskForm from "./TaskForm"
import { addTask, removeTask, editTask } from "../actions/task"
import { PencilSquare, Trash } from "react-bootstrap-icons"

import { connect } from "react-redux"

class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleForm: false,
            selectedTask: {},
        }
    }

    handleShowForm = () => {
        this.setState({
            toggleForm: true,
        })
    }

    handleEdit = (id) => {
        const selectedTask = this.props.task_payload.find(
            (task) => task.id === id
        )
        this.setState({
            selectedTask,
            toggleForm: true,
        })
    }
    handleRemove = (id) => {
        this.props.dispatch(removeTask({ id }))
    }
    render() {
        return (
            <div>
                <div className="main-container">
                    <div className="first-container">
                        <div className="task-count">
                            <h4>Tasks</h4> {this.props.task_payload.length}
                        </div>
                        <div className="task-button">
                            <button onClick={this.handleShowForm}>
                                Add Task
                            </button>
                        </div>
                    </div>

                    {!this.state.toggleForm ? (
                        <div></div>
                    ) : (
                        <TaskForm
                            task={this.state.selectedTask}
                            toggleClosed={(val) => this.setState(val)}
                            onSubmit={(task_payload) => {
                                Object.keys(this.state.selectedTask).length ===
                                0
                                    ? this.props.dispatch(addTask(task_payload))
                                    : this.props.dispatch(
                                          editTask(
                                              task_payload.id,
                                              task_payload
                                          )
                                      )
                            }}
                        />
                    )}

                    <div className="task-lists-container">
                        <div className="task-lists">
                            {this.props.task_payload.map((val, index) => (
                                <div className="list" key={index}>
                                    <label>{val.task_msg}</label>
                                    <label>{val.task_date}</label>

                                    <button
                                        className="list-edit-btn"
                                        onClick={() => this.handleEdit(val.id)}
                                    >
                                        <PencilSquare />
                                    </button>
                                    <button
                                        className="list-delete-btn"
                                        onClick={() =>
                                            this.handleRemove(val.id)
                                        }
                                    >
                                        <Trash />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        task_payload: state.task_payload,
    }
}
export default connect(mapStateToProps)(Task)
