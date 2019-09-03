import React, { Component } from 'react'
import NewsCard from './NewsCard'
import NewsDataManager from './NewsDataManager'
import NewsItemNewModal from './NewsItemNewModal'


class NewsList extends Component {
    state = {
        news: []
    }

componentDidMount(){
    NewsDataManager.getAllNews()
    .then((news) => {
        this.setState({
            news: news
        })
    })
}

// use fat arrow
addNewsItem = (newsObject) => {
return NewsDataManager.postNewsItem(newsObject)
  .then(() => {
    NewsDataManager.getAllNews()
    .then((news) => {
        this.setState({
            news: news
        })
    })
  })
}


deleteNewsItem = (id) => {
    NewsDataManager.deleteNewsItem(id)
    .then(() => {
      NewsDataManager.getAllNews()
      .then((news) => {
        this.setState({
            news: news
        })
      })
    })
  }

  postEditedNewsItem = (id) => {
    return NewsDataManager.editNewsItem(id)
    .then(() => {
      NewsDataManager.getAllNews()
      .then((news) => {
        this.setState({
            news: news,
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
      </div>
    </React.Fragment>
    )
  }
}

export default NewsList