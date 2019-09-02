import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Chat from "./chat/ChatList";
import EventMain from "./events/EventMain"
import Auth from "./auth/Auth"
import FriendMain from "./friends/FriendMain";

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
            // Render FriendList component when user goes to '/friends'
            return <FriendMain {...props} />
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
            // Remove null and return the component which will show the user's tasks
          }}
        />

        <Route
          path="/tasks" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />

      </React.Fragment>
    );
  }
}
