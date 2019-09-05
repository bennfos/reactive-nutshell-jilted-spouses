import React, { Component } from "react";
import TaskEditModal from "./TaskEditModal";
import TaskCheckbox from "./TaskCheckbox";
import { Button } from "reactstrap";
import "./Tasks.css";

class TaskCard extends Component {
  completeTask = event => {
    event.preventDefault();
    this.setState({ loadingStatus: true });
    const completedTask = {
      id: this.props.task.id,
      userId: parseInt(sessionStorage.getItem("credentials")),
      taskName: this.props.task.taskName,
      date: this.props.task.date,
      isCompleted: true
    };
    this.props.completedTaskResults(completedTask);
    console.log(completedTask);
  };

  render() {
    return (
      <div className="taskCard">
        <div className="taskCardContent">
          <h3>Name: {this.props.task.taskName}</h3>
          <p>Complete By: {this.props.task.date}</p>
          <TaskCheckbox {...this.props} completeTask={this.completeTask} />
          <br />
          <br />
          <TaskEditModal
            {...this.props}
            postEditedTask={this.props.postEditedTask}
          />
          <Button
            color="secondary"
            onClick={() => this.props.deleteTask(this.props.task.id)}
          >
            Delete
          </Button>
        </div>
      </div>
    );
  }
}

export default TaskCard;
