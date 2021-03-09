import { React, Component } from "react"
import TaskForm from "./TaskForm"
import { postTask, putTask, fetchTask, deleteTask } from "../actions/task"
import { PencilSquare, Trash, Plus } from "react-bootstrap-icons"
import { connect } from "react-redux"
import { login, getUser } from "../api/task"

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
        this.props.deleteTask(id)
    }
    componentDidMount() {
        this.props.fetchTask()
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
                                <Plus />
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
                                    ? this.props.postTask(task_payload)
                                    : this.props.putTask(
                                          this.state.selectedTask.id,
                                          task_payload
                                      )
                            }}
                        />
                    )}

                    <div className="task-lists-container">
                        {this.props.task_payload.map((val, index) => (
                            <div key={index} className="task-lists">
                                <div className="list">
                                    <label>{val.task_msg}</label>
                                    <label id="date-label">
                                        {val.task_date}
                                    </label>
                                </div>
                                <div className="btn-list">
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
                            </div>
                        ))}
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

function mapDispatchToProps(dispatch) {
    return {
        // This function will be available in component as `this.props.fetchTask`

        fetchTask: function () {
            dispatch(fetchTask())
        },
        postTask: function (task_payload) {
            dispatch(postTask(task_payload))
        },
        putTask: function (id, task_payload) {
            dispatch(putTask(id, task_payload))
        },
        deleteTask: function (id) {
            dispatch(deleteTask(id))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Task)
