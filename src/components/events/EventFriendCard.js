import React, { Component } from 'react';

class EventFriendCard extends Component {

    render() {
        console.log("EventFriendCard props", this.props);
        return (
            <React.Fragment>
                <div className="eventCard">
                    <div className="eventCardContent friendItem">
                        <h3>Name: {this.props.event.eventName}</h3>
                        <p>Location:{this.props.event.eventLocation}</p>
                        <p>Date: {this.props.event.date}</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default EventFriendCard