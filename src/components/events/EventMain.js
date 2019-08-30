import React, { Component } from 'react';
import EventList from "./EventList"
import EventForm from "./EventForm"

class EventMain extends Component {
    render() {
        return (
            <React.Fragment>
                <EventForm {...this.props}/>
                <EventList {...this.props}/>
            </React.Fragment>
        )
    }
}

export default EventMain