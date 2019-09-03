import React, { Component } from 'react'
import EventEditModal from './EventEditModal'

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
          <button type="button" onClick={() => this.props.deleteEvent(this.props.event.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default EventCard;