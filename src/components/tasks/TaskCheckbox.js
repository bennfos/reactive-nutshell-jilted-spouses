import React, { Component } from "react"
import TaskDataManager from './TaskDataManager'

class TaskCheckbox extends Component {
  state = {
    tasks: [],
    userId: parseInt(sessionStorage.getItem("credentials")),
    taskName: "",
    date: "",
    isCompleted: false,
    loadingStatus: false,
};

handleFieldChange = evt => {
  const stateToChange = {};
  stateToChange[evt.target.id] = evt.target.value;
  this.setState(stateToChange);
};


componentDidMount() {
  TaskDataManager.getTask(this.props.task.id)
  .then(task => {
      this.setState({
      userId: parseInt(sessionStorage.getItem("credentials")),
      taskName: this.props.task.taskName,
      date: this.props.task.date,
      isCompleted: true,
      loadingStatus: false,
      });
  });
}

render() {
  return(
    <div>
      <input 
        onClick={this.props.completeTask}
        type="radio"
        id="isCompleted"
        value={this.props.isCompleted}
        >
      </input>
    </div>
  )
}
}

export default TaskCheckbox