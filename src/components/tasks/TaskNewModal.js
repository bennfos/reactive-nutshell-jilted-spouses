import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class TaskNewModal extends Component {
    state = {
        tasks: [],
        taskName: "",
        date: "",
        isCompleted: false,
        loadingStatus: false,
    };
    
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            taskName: "",
            date: "",
            isCompleted: false,
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

    constructNewTask = event => {
        event.preventDefault();
        if (this.state.taskName === ""||
        this.state.date === "") {
            alert("Please fill out all fields");
        } else {
            this.setState({ loadingStatus: true });
            const newTask = {
                taskName: this.state.taskName,
                date: this.state.date,
                isCompleted: this.state.isCompleted
            };
            this.props.addTask(newTask)
            .then(this.toggle)
    }
};

    render(){
        return(
            <>
            <section className="taskSectionContent">
            <Button type="button"
            color="success"
            onClick={this.toggle}>
            New Task
            </Button>
            </section>
            <div>
            <Modal isOpen={this.state.modal} toggle={this.toggle}
            
            className={this.props.className}

            >
                <ModalHeader toggle={this.toggle}>New Event</ModalHeader>
                <ModalBody>
                <form>
                    <fieldset>
                        <div className="newTaskForm">
                            <input onChange={this.handleFieldChange} type="text"
                                id="taskName"
                                placeholder="Task Name"
                                required
                                autoFocus=""
                            /><br/>
                            <input onChange={this.handleFieldChange} type="date"
                                id="date"
                                placeholder="Complete By:"
                                required
                            /><br/>
                            <br/>
                        </div>
                    </fieldset>
                </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.constructNewTask}>Save</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
        </>
        )
    }
}

export default TaskNewModal