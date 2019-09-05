import React, { Component } from 'react';
import FriendDataManager from '../friends/FriendDataManager';
import NewsFriendCard from './NewsFriendCard';


class NewsFriend extends Component {
    state = {
        friend: {},
        activeUserId: parseInt(sessionStorage.getItem("credentials"))
    }

    componentDidMount() {
        if (this.props.connection.userId === this.state.activeUserId) {
            FriendDataManager.getFriendNews(this.props.connection.friendId)
                .then(friend => {
                    this.setState({ friend: friend })
                })
        } else {
            FriendDataManager.getFriendNews(this.props.connection.userId)
                .then(friend => {
                    this.setState({ friend: friend })
                })
        }
    }

    render() {
        console.log("NewsFriend", this.state);
        return (
            <React.Fragment>
                <div className="newsContainerCards">
                    {this.state.friend.news && (
                        this.state.friend.news.map(newsItem =>
                            <NewsFriendCard
                                key={newsItem.id}
                                newsItem={newsItem}
                            />)
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default NewsFriend;