import React, { Component } from 'react';
import NewsList from "./NewsList"
import NewsForm from "./NewsForm"
import NewsDataManager from "./NewsDataManager"



class NewsMain extends Component {

    

    render() {
        return (
            <React.Fragment>
                <NewsList
                state={this.state}
                {...this.props}/>
            </React.Fragment>
        )
    }
}

export default NewsMain