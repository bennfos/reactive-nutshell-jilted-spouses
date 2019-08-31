import React, { Component } from 'react'

class NewsCard extends Component {
  render() {
    return (
      <div className="newsCard">
        <div className="newsCardContent">
          <h3>Title: {this.props.news.title}</h3>
          <p>Link:{this.props.news.url}</p>
          <p>Synopsis: {this.props.news.synopsis}</p>
          {/* <button type="button"
          onClick={() => {this.props.history.push(`/animals/${this.props.animal.id}/edit`)}}>Edit</button>
          <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Discharge</button> */}
        </div>
      </div>
    );
  }
}

export default NewsCard;