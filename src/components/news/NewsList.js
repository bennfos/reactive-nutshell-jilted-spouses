import React, { Component } from "react";
import NewsCard from "./NewsCard";
import NewsDataManager from "./NewsDataManager";
import NewsItemNewModal from "./NewsItemNewModal";
import "./News.css";

class NewsList extends Component {
  //Defines initial state
  state = {
    news: [],
    loggedInUserId: parseInt(sessionStorage.getItem("credentials"))
  };

  //When component mounts, gets all news and sets state of news array with all existsing news items
  componentDidMount() {
    NewsDataManager.getAllNews(this.state.loggedInUserId).then(news => {
      this.setState({
        news: news
      });
    });
  }

  // Called in NewsItemNewModal (child component) to post a new object to database and update state
  addNewsItem = newsObject => {
    return NewsDataManager.postNewsItem(newsObject).then(() => {
      NewsDataManager.getAllNews(this.state.loggedInUserId).then(news => {
        this.setState({
          news: news
        });
      });
    });
  };

  // Called in NewsCard(child component) to delete object from database and update state
  deleteNewsItem = id => {
    NewsDataManager.deleteNewsItem(id).then(() => {
      NewsDataManager.getAllNews(this.state.loggedInUserId).then(news => {
        this.setState({
          news: news
        });
      });
    });
  };

  // Called in NewEditModal (child component) to post edited object to database and update state
  postEditedNewsItem = id => {
    return NewsDataManager.editNewsItem(id).then(() => {
      NewsDataManager.getAllNews(this.state.loggedInUserId).then(news => {
        this.setState({
          news: news
        });
      });
    });
  };

  render() {
    return (
      <React.Fragment>
        <NewsItemNewModal {...this.props} addNewsItem={this.addNewsItem} />
        <div className="newsContainerCards">
          {this.state.news.map(newsItem => (
            <NewsCard
              key={newsItem.id}
              newsItem={newsItem}
              deleteNewsItem={this.deleteNewsItem}
              postEditedNewsItem={this.postEditedNewsItem}
              {...this.props}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default NewsList;
