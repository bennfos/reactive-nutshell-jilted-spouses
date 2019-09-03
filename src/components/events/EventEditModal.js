import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EventDataManager from './EventDataManager'

class EventEditModal extends Component {
    state = {
        events: [],
        eventName: "",
        date: "",
        eventLocation: "",
        loadingStatus: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            eventName: "",
            date: "",
            eventLocation: "",
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

    editExistingEvent = (event) => {
        event.preventDefault();
        if (this.state.eventName === ""||
        this.state.date === "" ||
        this.state.eventLocation === "") {
            alert("Please fill out all fields");
        } else {
            this.setState({ loadingStatus: true });
            const editedEvent = {
                id: this.props.event.id,
                userId: parseInt(sessionStorage.getItem("credentials")),
                eventName: this.state.eventName,
                date: this.state.date,
                eventLocation: this.state.eventLocation
            };
            this.props.postEditedEvent(editedEvent)
            .then(this.toggle)
    }
};

    componentDidMount() {
        EventDataManager.getEvent(this.props.event.id)
        .then(event => {
            this.setState({
            eventName: event.eventName,
            date: event.date,
            eventLocation: event.eventLocation,
            loadingStatus: false,
            });
        });
    }

    render(){
        return(
            <>
            <section className="eventSectionContent">
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
                <ModalHeader toggle={this.toggle}>New Event</ModalHeader>
                <ModalBody>
                <form>
                    <fieldset>
                        <div className="newEventForm">
                            <input onChange={this.handleFieldChange} type="text"
                                id="eventName"
                                value={this.state.eventName}
                                placeholder="Event Name"
                                required
                                autoFocus=""
                            /><br/>
                            <input onChange={this.handleFieldChange} type="date"
                                id="date"
                                value={this.state.date}
                                placeholder="Date"
                                required
                            /><br/>
                            <input onChange={this.handleFieldChange} type="text"
                                id="eventLocation"
                                value={this.state.eventLocation}
                                placeholder="Location"
                                required
                            /><br/>
                        </div>
                    </fieldset>
                </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.editExistingEvent}>Save</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
        </>
        )
    }
}

export default EventEditModal