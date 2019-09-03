import React, { Component } from 'react';
import FriendSearch from './FriendSearch';
import FriendDataManager from './FriendDataManager';
import FriendCard from './FriendCard';
// import the components we will need

class FriendList extends Component {
    state = {
        activeUserId: parseInt(sessionStorage.getItem("credentials")),
        connections: [],
        userFriends: [],
        friendFriends: []
    }

    componentDidMount() {
        // Get all the connections where the activeUserId matches either the userId or friendId, then get the user for each connection by getting the item that does not match the activeUserId
        FriendDataManager.getConnections().then(connections => {

            const userConnections = connections.filter(connection => {
                if (this.state.activeUserId === connection.userId ||
                    this.state.activeUserId === connection.friendId) {
                        return connection
                }
            })

            this.setState({ connections: userConnections })
        })
    }

    saveNewConnection = (connectionObject) => {
        FriendDataManager.saveConnection(connectionObject);
    }

    render() {
        console.log("state", this.state);
        return (
            <React.Fragment>
                <FriendSearch 
                    {...this.props}
                    saveNewConnection={this.saveNewConnection}
                />
                <h1>My Friends</h1>
                <div className="container-friendCards">
                    {this.state.connections.map(connection =>
                        <FriendCard
                            key={connection.id}
                            connection={connection}
                            {...this.props}
                        />
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default FriendList;

{/* <div className="container-cards">
    {this.state.animals.map(animal =>
        <AnimalCard
            key={animal.id}
            animal={animal}
            deleteAnimal={this.deleteAnimal}
            {...this.props}
        />
    )}
</div> */}

