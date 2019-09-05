import React, { Component } from 'react';
import FriendDataManager from '../friends/FriendDataManager';
import EventFriendCard from './EventFriendCard';


class EventFriend extends Component {
    state = {
        friend: {},
        activeUserId: parseInt(sessionStorage.getItem("credentials"))
    }

    componentDidMount() {
        if (this.props.connection.userId === this.state.activeUserId) {
            FriendDataManager.getFriendEvents(this.props.connection.friendId)
                .then(friend => {
                    this.setState({ friend: friend })
                })
        } else {
            FriendDataManager.getFriendEvents(this.props.connection.userId)
                .then(friend => {
                    this.setState({ friend: friend })
                })
        }
    }

    render() {
        console.log("EventFriend", this.state);
        return (
            <React.Fragment>
                <div className="eventContainerCards">
                    {this.state.friend.events && (
                        this.state.friend.events.map(event => 
                            <EventFriendCard 
                                key={event.id}
                                event={event}
                            />)
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default EventFriend;