import React, { Component } from "react"
import { SingleDatePicker } from "react-dates"
import moment from "moment"
import { v4 as uuidv4 } from "uuid"
import "react-dates/lib/css/_datepicker.css"
import "react-dates/initialize"

export class TaskForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.task ? props.task.id : uuidv4(),
            task_msg: props.task ? props.task.task_msg : "",
            task_date: props.task ? moment(props.task.task_date) : moment(),
            task_time: props.task ? props.task.task_time : "",
            assigned_user: props.task ? props.task.assigned_user : "",
            calendarFocused: false,
        }
    }
    onDescriptionChange = (e) => {
        const task_msg = e.target.value
        this.setState(() => ({ task_msg }))
    }
    onDateChange = (task_date) => {
        if (task_date) {
            this.setState(() => ({ task_date }))
        }
    }
    onTimeChange = (e) => {
        const task_time = e.target.value
        this.setState(() => ({ task_time }))
    }

    onAssignedUser = (e) => {
        const assigned_user = e.target.value
        this.setState(() => ({ assigned_user }))
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }
    onSubmit = (e) => {
        e.preventDefault()

        if (!this.state.task_date || !this.state.task_time) {
            this.setState(() => ({
                error: "Please provide date and time.",
            }))
        } else {
            this.setState(() => ({ error: "" }))
            console.log("Form submitted!")

            this.props.onSubmit({
                id: this.state.id,
                task_date: this.state.task_date.format("MM/DD/YY"),
                task_msg: this.state.task_msg,
                task_time: this.state.task_time,
                assigned_user: this.state.assigned_user,
            })
            this.props.toggleClosed({
                toggleForm: false,
            })
            this.setState(() => ({}))
        }
    }
    onCancel = () => {
        this.props.toggleClosed({
            toggleForm: false,
        })
        this.setState(() => ({}))
    }

    render() {
        return (
            <div>
                <div className="task-form-container">
                    {this.state.error && (
                        <p style={{ color: "red" }}>{this.state.error}</p>
                    )}
                    <form onSubmit={this.onSubmit}>
                        <div className="desc-container">
                            <label>Task Description</label>
                            <input
                                type="test"
                                name="task_msg"
                                placeholder="Description"
                                autoFocus
                                onChange={this.onDescriptionChange}
                                value={this.state.task_msg}
                            />
                        </div>
                        <div className="date-time-container">
                            <div className="date-container">
                                <label>Date</label>
                                <SingleDatePicker
                                    date={this.state.task_date}
                                    onDateChange={this.onDateChange}
                                    focused={this.state.calendarFocused}
                                    onFocusChange={this.onFocusChange}
                                    numberOfMonths={1}
                                />
                            </div>
                            <div className="time-container">
                                <label>Time</label>
                                <input
                                    type="time"
                                    name="task_time"
                                    placeholder="Time"
                                    onChange={this.onTimeChange}
                                    value={this.state.task_time}
                                />
                            </div>
                        </div>
                        <div className="assign-user-container">
                            <label>Assign User</label>
                            <input
                                type="text"
                                name="assigned_user"
                                placeholder="User"
                                onChange={this.onAssignedUser}
                                value={this.state.assigned_user}
                            />
                        </div>
                        <div className="buttons-container">
                            <button id="cancel-btn" onClick={this.onCancel}>
                                Cancel
                            </button>
                            <button id="save-btn">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default TaskForm
