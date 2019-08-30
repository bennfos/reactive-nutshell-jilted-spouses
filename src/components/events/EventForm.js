import React, { Component } from 'react';
import EventDataManager from './EventDataManager';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class EventForm extends Component {
    state = {
        eventName: "",
        date: "",
        eventLocation: "",
        loadingStatus: false,
    };
    
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
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

    constructNewEvent = event => {
        event.preventDefault();
        if (this.state.eventName === ""||
        this.state.date === "" ||
        this.state.eventLocation === "") {
            alert("Please fill out all fields");
        } else {
            this.setState({ loadingStatus: true });
            const event = {
                eventName: this.state.eventName,
                date: this.state.date,
                eventLocation: this.state.eventLocation
            };
            EventDataManager.postEvent(event)
            .then(() => this.props.history.push("/events"));
        }
    };

    render(){
        return(
            <>
            <section className="eventSectionContent">
            <Button type="button"
            color="success"
            onClick={this.toggle}>
            New Event
            </Button>
            </section>
            <div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Sign up</ModalHeader>
                <ModalBody>
                <form>
                    <fieldset>
                        <div className="loginForm">
                            <input onChange={this.handleFieldChange} type="email"
                                id="email"
                                placeholder="Email address"
                                required
                                autoFocus=""
                            /><br/>
                            <input onChange={this.handleFieldChange} type="text"
                                id="username"
                                placeholder="Username"
                                required
                            /><br/>
                            <input onChange={this.handleFieldChange} type="password"
                                id="password"
                                placeholder="Password"
                                required
                            /><br/>
                            <input onChange={this.handleFieldChange} type="password"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                required
                            />
                        </div>
                    </fieldset>
                </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.handleRegister}>Sign up</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
        </>
        )
    }
}

export default EventForm