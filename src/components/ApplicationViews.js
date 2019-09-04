import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
//import Chat from "./chat/ChatList";
import EventMain from "./events/EventMain"
import Auth from "./auth/Auth"
import FriendMain from "./friends/FriendMain";
import TaskMain from "./tasks/TaskMain";
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
            // Render FriendList component when user goes to '/friends'
            if (this.isAuthenticated()) {
              return <FriendMain {...props} />
            }
              return <Auth {...props} />
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
            if (this.isAuthenticated()) {
            return <EventMain {...props} />
            }
            return <Auth {...props}/>
          }}
        />

        <Route
          path="/tasks" render={props => {
            if (this.isAuthenticated()) {
            return <TaskMain {...props} />
            }
            return <Auth {...props}/>
          }}
        />

        <Route
          path="/news" render={props => {
            if (this.isAuthenticated()) {
            return <NewsMain {...props}/>
            }
            return <Auth {...props}/>
          }}
        />

      </React.Fragment>
    );
  }
}
