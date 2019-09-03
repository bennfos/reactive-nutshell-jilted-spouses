import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
//import Chat from "./chat/ChatList";
import EventMain from "./events/EventMain"
import Auth from "./auth/Auth"
import NewsMain from "./news/NewsMain"

export default class ApplicationViews extends Component {

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return <Auth {...props}/>
            }
          }
        />


        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/chat" render={props => {
            return null
            // Remove null and return the component which will show the messages
          }}
        />
        <Route
          path="/events" render={props => {
            return <EventMain {...props} />
          }}
        />

        <Route
          path="/tasks" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />

        <Route
          path="/news" render={props => {
            return <NewsMain {...props} />
            // Remove null and return the component which will show the user's tasks
          }}
        />

      </React.Fragment>
    );
  }
}
