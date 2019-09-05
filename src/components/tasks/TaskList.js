import React, { Component } from 'react'
import TaskCard from './TaskCard'
import TaskDataManager from './TaskDataManager'
import TaskNewModal from './TaskNewModal'

class TaskList extends Component {
    state = {
        tasks: [],
        userId: parseInt(sessionStorage.getItem("credentials"))
    }
    
componentDidMount(){
    TaskDataManager.getAllTasks(this.state.userId)
    .then((tasks) => {
        this.setState({
            tasks: tasks
        })
    })
}

// use fat arrow
addTask = (taskObject) => {
return TaskDataManager.postTask(taskObject)
  .then(() => {
    TaskDataManager.getAllTasks(this.state.userId)
    .then((tasks) => {
        this.setState({
            tasks: tasks
        })
    })
  })
}

deleteTask = (id) => {
    TaskDataManager.deleteTask(id)
    .then(() => {
      TaskDataManager.getAllTasks(this.state.userId)
      .then((tasks) => {
        this.setState({
            tasks: tasks
        })
      })
    })
  }

  completedTaskResults = (id) => {
    return TaskDataManager.editTask(id)
    .then(() => {
      TaskDataManager.getAllTasks(this.state.userId)
      .then((tasks) => {
        this.setState({
            tasks: tasks,
        })
      })
    })
  }

  postEditedTask = (id) => {
    return TaskDataManager.editTask(id)
    .then(() => {
      TaskDataManager.getAllTasks(this.state.userId)
      .then((tasks) => {
        this.setState({
            tasks: tasks,
        })
      })
    })
  }

render(){
    return(
      <React.Fragment>
       <TaskNewModal 
        {...this.props}
        addTask={this.addTask}
        /> 
      <div className="taskContainerCards">
        {this.state.tasks.map(task =>
        {if (task.isCompleted === false){
         return <TaskCard
            key={task.id}
            task={task}
            deleteTask={this.deleteTask}
            postEditedTask={this.postEditedTask}
            completedTaskResults={this.completedTaskResults}
            {...this.props}
          />
        }
      })}
      </div>
    </React.Fragment>
)}
}

export default TaskList