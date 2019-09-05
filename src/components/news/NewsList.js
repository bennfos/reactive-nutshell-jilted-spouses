import React, { Component } from 'react'
import NewsCard from './NewsCard'
import NewsDataManager from './NewsDataManager'
import NewsItemNewModal from './NewsItemNewModal'
import NewsFriend from './NewsFriend'
import FriendDataManager from '../friends/FriendDataManager'


class NewsList extends Component {

//Defines initial state
    state = {
        news: [],
        userId: parseInt(sessionStorage.getItem("credentials")),
        connections: []
    }

//When component mounts, gets all news and sets state of news array with all existsing news items
    componentDidMount(){
        NewsDataManager.getAllNews(this.state.userId)
        .then((news) => {

            FriendDataManager.getConnections().then(connections => {

                const userConnections = connections.filter(connection => {
                  if (this.state.userId === connection.userId ||
                    this.state.userId === connection.friendId) {
                    return connection
                  }
                })

            this.setState({
                connections: userConnections,
                news: news
            })
        })
    })
}

// Called in NewsItemNewModal (child component) to post a new object to database and update state
    addNewsItem = (newsObject) => {
    return NewsDataManager.postNewsItem(newsObject)
    .then(() => {
        NewsDataManager.getAllNews(this.state.userId)
        .then((news) => {

            FriendDataManager.getConnections().then(connections => {

                const userConnections = connections.filter(connection => {
                  if (this.state.userId === connection.userId ||
                    this.state.userId === connection.friendId) {
                    return connection
                  }
                })

            this.setState({
                connections: userConnections,
                news: news
            })
            })
        })
    })}


// Called in NewsCard(child component) to delete object from database and update state
    deleteNewsItem = (id) => {
        NewsDataManager.deleteNewsItem(id)
        .then(() => {
        NewsDataManager.getAllNews(this.state.userId)
        .then((news) => {

            FriendDataManager.getConnections().then(connections => {

                const userConnections = connections.filter(connection => {
                  if (this.state.userId === connection.userId ||
                    this.state.userId === connection.friendId) {
                    return connection
                  }
                })

                this.setState({
                    connections: userConnections,
                    news: news })
            })
            })
        })
    }

// Called in NewEditModal (child component) to post edited object to database and update state
    postEditedNewsItem = (id) => {
        return NewsDataManager.editNewsItem(id)
        .then(() => {
        NewsDataManager.getAllNews(this.state.userId)
        .then((news) => {
            FriendDataManager.getConnections().then(connections => {

                const userConnections = connections.filter(connection => {
                  if (this.state.userId === connection.userId ||
                    this.state.userId === connection.friendId) {
                    return connection
                  }
                })

                this.setState({
                    connections: userConnections,
                    news: news })
              })
            })
        })
      }


    render(){
        return(
        <React.Fragment>
        <NewsItemNewModal
            {...this.props}
            addNewsItem={this.addNewsItem}
            />
        <div className="newsContainerCards">
            {this.state.news.map(newsItem =>
            <NewsCard
                key={newsItem.id}
                newsItem={newsItem}
                deleteNewsItem={this.deleteNewsItem}
                postEditedNewsItem={this.postEditedNewsItem}
                {...this.props}
            />
            )}
            {this.state.connections.map(connection =>
            <NewsFriend
            key={connection.id}
            connection={connection}
            {...this.props}
          />
        )}
        </div>
        </React.Fragment>
    )}


}

export default NewsList