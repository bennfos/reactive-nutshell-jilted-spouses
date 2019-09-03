import React, { Component } from 'react'
import TaskEditModal from './TaskEditModal'
import TaskCheckbox from './TaskCheckbox'

class TaskCard extends Component {

  render() {
    return (
      <div className="taskCard">
        <div className="taskCardContent">
          <h3>Name: {this.props.task.taskName}</h3>
          <p>Complete By: {this.props.task.date}</p>
          <TaskCheckbox 
          {...this.props}
          completedTaskResults={this.props.completedTaskResults}/>
          <br/>
          <br/>
          <TaskEditModal 
          {...this.props}
          postEditedTask={this.props.postEditedTask}
          />
          <button type="button" onClick={() => this.props.deleteTask(this.props.task.id)}>Delete</button>
      </div>
      </div>
    );
  }
}

export default TaskCard;