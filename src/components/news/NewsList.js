import React, { Component } from 'react'
//import the components we will need
import NewsCard from './NewsCard'
import NewsForm from './NewsForm'
import NewsDataManager from './NewsDataManager'
import { Button } from 'reactstrap';


class NewsList extends Component {

    state = {
        news: [],
        title: "",
        url: "",
        synopsis: "",
        timestamp: "",
        loadingStatus: false,
    };



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

addNewsItem = () => {

}

render(){
    return(
    <React.Fragment>
        <NewsForm
                addNewsItem={this.addNewsItem}
                {...this.props}/>
        <div className="newsContainerCards">
            {this.props.state.news.map(newsItem =>
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