import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TaskDataManager from './TaskDataManager'

class TaskEditModal extends Component {
    state = {
        tasks: [],
        userId: parseInt(sessionStorage.getItem("credentials")),
        taskName: "",
        date: "",
        isCompleted: false,
        loadingStatus: false,
    };
    
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            userId: parseInt(sessionStorage.getItem("credentials")),
            taskName: "",
            date: "",
            isCompleted: false,
            loadingStatus: false,
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    editExistingTask = (event) => {
        event.preventDefault();
        if (this.state.taskName === ""||
        this.state.date === "") {
            alert("Please fill out all fields");
        } else {
            this.setState({ loadingStatus: true });
            const editedTask = {
                id: this.props.task.id,
                userId: parseInt(sessionStorage.getItem("credentials")),
                taskName: this.state.taskName,
                date: this.state.date,
                isCompleted: false
            };
            this.props.postEditedTask(editedTask)
            .then(this.toggle)
    }
};


    componentDidMount() {
        TaskDataManager.getTask(this.props.task.id)
        .then(task => {
            this.setState({
            userId: parseInt(sessionStorage.getItem("credentials")),
            taskName: task.taskName,
            date: task.date,
            isCompleted: false,
            loadingStatus: false,
            });
        });
    }

    render(){
        return(
            <>
            <section className="taskSectionContent">
            <Button type="button"
            color="success"
            onClick={this.toggle}>
            Edit
            </Button>
            </section>
            <div>
            <Modal isOpen={this.state.modal} toggle={this.toggle}
            className={this.props.className}
            >
                <ModalHeader toggle={this.toggle}>Edit Task</ModalHeader>
                <ModalBody>
                <form>
                    <fieldset>
                        <div className="newTaskForm">
                            <input onChange={this.handleFieldChange} type="text"
                                id="taskName"
                                value={this.state.taskName}
                                placeholder="Task Name"
                                required
                                autoFocus=""
                            /><br/>
                            <input onChange={this.handleFieldChange} type="date"
                                id="date"
                                value={this.state.date}
                                placeholder="Complete By:"
                                required
                            /><br/>
                        </div>
                    </fieldset>
                </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.editExistingTask}>Save</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
        </>
        )
    }
}

export default TaskEditModal