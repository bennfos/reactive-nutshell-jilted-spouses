import React, { Component } from 'react'

class EventCard extends Component {
  render() {
    return (
      <div className="eventCard">
        <div className="eventCardContent">
          <h3>Name: {this.props.event.eventName}</h3>
          <p>Location:{this.props.event.eventLocation}</p>
          <p>Date: {this.props.event.date}</p>
          {/* <button type="button"
          onClick={() => {this.props.history.push(`/animals/${this.props.animal.id}/edit`)}}>Edit</button> */}
          <button type="button" onClick={() => this.props.deleteEvent(this.props.event.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default EventCard;