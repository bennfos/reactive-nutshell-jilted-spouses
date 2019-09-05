import React, { Component } from 'react';

class NewsFriendCard extends Component {

    render() {
        console.log("NewsFriendCard props", this.props);
        return (
            <React.Fragment>
                <div className="newsCard">
                    <div className="newsCardContent friendItem">
                        <h3>{this.props.newsItem.title}</h3>
                        <p>{this.props.newsItem.synopsis}</p>
                        <a href={this.props.newsItem.url}>Link</a>
                        <p>{this.props.newsItem.timestamp}</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default NewsFriendCard