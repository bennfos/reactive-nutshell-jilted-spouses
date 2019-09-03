import React, { Component } from 'react'
//import the components we will need
import EventCard from './EventCard'
import EventDataManager from './EventDataManager'
//import { Button } from 'reactstrap';
import EventNewModal from './EventNewModal'


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

// use fat arrow
addEvent = (eventObject) => {
return EventDataManager.postEvent(eventObject)
  .then(() => {
    EventDataManager.getAllEvents()
    .then((events) => {
        this.setState({
            events: events
        })
    })
  })
}


deleteEvent = (id) => {
    EventDataManager.deleteEvent(id)
    .then(() => {
      EventDataManager.getAllEvents()
      .then((events) => {
        this.setState({
            events: events
        })
      })
    })
  }

  postEditedEvent = (id) => {
    return EventDataManager.editEvent(id)
    .then(() => {
      EventDataManager.getAllEvents()
      .then((events) => {
        this.setState({
            events: events,
        })
      })
    })
  }



render(){
    return(
      <React.Fragment>
       <EventNewModal 
        {...this.props}
        addEvent={this.addEvent}
        /> 
      <div className="eventContainerCards">
        {this.state.events.map(event =>
          <EventCard
            key={event.id}
            event={event}
            deleteEvent={this.deleteEvent}
            postEditedEvent={this.postEditedEvent}
            {...this.props}
          />
        )}
      </div>
    </React.Fragment>
    )
  }
}

export default EventList