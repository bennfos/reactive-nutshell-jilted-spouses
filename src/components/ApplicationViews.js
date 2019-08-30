import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Login from "./auth/Login";
import Chat from "./chat/ChatList";
import RegisterModal from "./auth/RegisterModal";

export default class ApplicationViews extends Component {
  
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            if (this.isAuthenticated()) {
              return <Chat />
            }
            return <Login {...props}/>
            // Remove null and return the component which will show news articles
          }}
        />

        <Route
          path="/" render={props => {
            return <RegisterModal {...props}/>
            // Remove null and return the component which will show news articles
          }}
        />

      

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages" render={props => {
            return null
            // Remove null and return the component which will show the messages
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
