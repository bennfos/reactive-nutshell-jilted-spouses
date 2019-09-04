import React, { Component } from 'react';
import NewsList from "./NewsList"


class NewsMain extends Component {

    render() {
        return (
            <React.Fragment>
                <NewsList {...this.props}/>
            </React.Fragment>
        )
    }
}

export default NewsMain