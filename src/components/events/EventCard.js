import React, { Component } from "react";
import EventEditModal from "./EventEditModal";
import { Button } from "reactstrap";
import "./Events.css";

class EventCard extends Component {
  render() {
    return (
      <div className="eventCard">
        <div className="eventCardContent">
          <h3>Name: {this.props.event.eventName}</h3>
          <p>Location:{this.props.event.eventLocation}</p>
          <p>Date: {this.props.event.date}</p>
          <EventEditModal
            {...this.props}
            postEditedEvent={this.props.postEditedEvent}
          />
          <Button onClick={() => this.props.deleteEvent(this.props.event.id)}>
            Delete
          </Button>
        </div>
      </div>
    );
  }
}

export default EventCard;
