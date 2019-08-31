import React, { Component } from 'react';
import NewsList from "./NewsList"
import NewsForm from "./NewsForm"

class NewsMain extends Component {
    render() {
        return (
            <React.Fragment>
                <NewsForm {...this.props}/>
                <NewsList {...this.props}/>
            </React.Fragment>
        )
    }
}

export default NewsMain