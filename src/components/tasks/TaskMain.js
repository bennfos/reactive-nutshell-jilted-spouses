import React, { Component } from 'react';
import TaskList from "./TaskList"

class TaskMain extends Component {

    render() {
        return (
            <React.Fragment>
                <TaskList {...this.props}/>
            </React.Fragment>
        )
    }
}

export default TaskMain