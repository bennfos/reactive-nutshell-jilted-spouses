import React, { Component } from 'react'
//import the components we will need
import EventCard from './EventCard'
import EventDataManager from './EventDataManager'
import { Button } from 'reactstrap';


class EventList extends Component {
    state = {
        events: []
    }

componentDidMount(){
    EventDataManager.getAllEvents()
    .then((events) => {
        this.setState({
            events: events
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
      <div className="eventContainerCards">
        {this.state.events.map(event =>
          <EventCard
            key={event.id}
            event={event}
            // deleteAnimal={this.deleteAnimal}
            // {...this.props}
          />
        )}
      </div>
    </React.Fragment>
    )
  }
}

export default EventList