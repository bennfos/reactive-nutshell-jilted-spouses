import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FriendDataManager from './FriendDataManager';
import FriendResult from './FriendResult';

class FriendSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foundUsers: [],
            searchInput: "",
            modal: false,
            userId: parseInt(sessionStorage.getItem("credentials")),
            loadingStatus:false
        }

        this.toggle = this.toggle.bind(this);
    }

    handleFieldChange = (event) => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    searchUsers = event => {
        event.preventDefault();
        console.log(this.state.searchInput);
        FriendDataManager.getUsers(this.state.searchInput).then(results => {
            this.setState({ foundUsers: results });
            console.log(this.state.foundUsers);
        })
        
    }



    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <section className="addFriendButton">
                    <Button type="button"
                        color="success"
                        onClick={this.toggle}>
                        Add a Friend
                    </Button>
                </section>
                <div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader></ModalHeader>
                        <ModalBody>
                            <form>
                                <fieldset>
                                    <div className="friendSearchInput">
                                        <input onChange={this.handleFieldChange}
                                            type="text"
                                            id="searchInput"
                                            placeholder="Enter a name to search"
                                            autoFocus
                                        />
                                    </div>
                                </fieldset>
                            </form>

                            <div className="searchResults">
                                {this.state.foundUsers.map(user => 
                                    <FriendResult
                                        key={user.id}
                                        user={user}
                                        {...this.props}
                                        saveNewConnection={this.props.saveNewConnection}
                                        toggle={this.toggle}
                                    />
                                )}
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.searchUsers}>Search</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>I'm Done</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </React.Fragment>
        )
    }
}

export default FriendSearch;
