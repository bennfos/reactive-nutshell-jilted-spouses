import React, { Component } from "react"
import TaskDataManager from './TaskDataManager'

class TaskCheckbox extends Component {

  state = {
    tasks: [],
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

completeTask = (event) => {
  event.preventDefault();
      this.setState({ loadingStatus: true });
      const completedTask = {
          id: this.props.task.id,
          taskName: this.state.taskName,
          date: this.state.date,
          isCompleted: true
      };
      this.props.completedTaskResults(completedTask)
      console.log(completedTask)
};


componentDidMount() {
  TaskDataManager.getTask(this.props.task.id)
  .then(task => {
      this.setState({
      taskName: task.taskName,
      date: task.date,
      isCompleted: true,
      loadingStatus: false,
      });
  });
}

render() {
  return(
    <div>
      <input 
        onClick={this.completeTask}
        type="radio"
        id="isCompleted"
        value={this.state.isCompleted}
        >
      </input>
    </div>
  )
}
}

export default TaskCheckbox