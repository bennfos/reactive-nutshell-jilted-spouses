import React, { Component } from 'react'
import NewsEditModal from './NewsEditModal'

class NewsCard extends Component {
  render() {
    return (
      <div className="newsCard">
        <div className="newsCardContent">
          <h3>{this.props.newsItem.title}</h3>
          <p>{this.props.newsItem.synopsis}</p>
          <a href={this.props.newsItem.url}>Link</a>
          <p>{this.props.newsItem.timestamp}</p>
          <NewsEditModal
          {...this.props}
          postedEditedNewsItem={this.props.postedEditedNewsItem}
          />
          <button type="button" onClick={() => this.props.deleteNewsItem(this.props.newsItem.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default NewsCard
