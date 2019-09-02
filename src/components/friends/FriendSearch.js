import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FriendDataManager from './FriendDataManager';

class FriendSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foundUsers: [],
            searchInput: "",
            modal: false
        }

        this.toggle = this.toggle.bind(this);
    }

    handleFieldChange = (event) => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    }

    toggle() {
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
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.searchUsers}>Search</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </React.Fragment>
        )
    }
}

export default FriendSearch;

// render(){
//     return (
//         <>
//             <section className="eventSectionContent">
//                 <Button type="button"
//                     color="success"
//                     onClick={this.toggle}>
//                     New Event
//             </Button>
//             </section>
//             <div>
//                 <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
//                     <ModalHeader toggle={this.toggle}>Sign up</ModalHeader>
//                     <ModalBody>
//                         <form>
//                             <fieldset>
//                                 <div className="loginForm">
//                                     <input onChange={this.handleFieldChange} type="email"
//                                         id="email"
//                                         placeholder="Email address"
//                                         required
//                                         autoFocus=""
//                                     /><br />
//                                     <input onChange={this.handleFieldChange} type="text"
//                                         id="username"
//                                         placeholder="Username"
//                                         required
//                                     /><br />
//                                     <input onChange={this.handleFieldChange} type="password"
//                                         id="password"
//                                         placeholder="Password"
//                                         required
//                                     /><br />
//                                     <input onChange={this.handleFieldChange} type="password"
//                                         id="confirmPassword"
//                                         placeholder="Confirm Password"
//                                         required
//                                     />
//                                 </div>
//                             </fieldset>
//                         </form>
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button color="primary" onClick={this.handleRegister}>Sign up</Button>{' '}
//                         <Button color="secondary" onClick={this.toggle}>Cancel</Button>
//                     </ModalFooter>
//                 </Modal>
//             </div>
//         </>
//     )
// }