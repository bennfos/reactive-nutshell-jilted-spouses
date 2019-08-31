import React, { Component } from 'react'
//import the components we will need
import NewsCard from './NewsCard'
import NewsDataManager from './NewsDataManager'
import { Button } from 'reactstrap';


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


// deleteAnimal = id => {
//     AnimalManager.delete(id)
//     .then(() => {
//       AnimalManager.getAllAnimals()
//       .then((newAnimals) => {
//         this.setState({
//             animals: newAnimals
//         })
//       })
//     })
//   }

render(){
    return(
    <React.Fragment>
      <div className="newsContainerCards">
        {this.state.news.map(newsItem =>
          <NewsCard
            key={newsItem.id}
            news={newsItem}
            // deleteAnimal={this.deleteAnimal}
            {...this.props}
          />
        )}
      </div>
    </React.Fragment>
    )
  }
}

export default NewsList