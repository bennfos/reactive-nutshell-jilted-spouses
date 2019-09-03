import React, { Component } from 'react'

class EventCard extends Component {
  render() {
    return (
      <div className="eventCard">
        <div className="eventCardContent">
          <h3>Name: {this.props.event.eventName}</h3>
          <p>Date:{this.props.event.eventLocation}</p>
          <input type="checkbox">: {this.props.event.isCompleted}</input>
          {/* <button type="button"
          onClick={() => {this.props.history.push(`/tasks/${this.props.task.id}/edit`)}}>Edit</button>
          <button type="button" onClick={() => this.props.deleteTask(this.props.animal.id)}>Delete</button> */}
        </div>
      </div>
    );
  }
}

export default EventCard;