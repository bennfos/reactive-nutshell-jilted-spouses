import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class NewsItemNewModal extends Component {

//Defines initial state
    state = {
        news: [],
        userId: 0,
        title: "",
        url: "http://",
        synopsis: "",
        timestamp: "",
        loadingStatus: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            news: [],
            title: "",
            url: "",
            synopsis: "",
            timestamp: "",
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

//Displays/hides the new article modal
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

//Sets state with input values as fields change
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
        console.log(stateToChange)
    };

    constructNewNewsItem = event => {
        console.log(this.state)
        event.preventDefault();

    //Validates user input
        if (this.state.title === ""||
        this.state.synopsis === "" ||
        this.state.url === "") {
            alert("Please fill out all fields");
        } else {
            this.setState({ loadingStatus: true });

        //creates a new object for the edited news item,
            const newNewsItem = {
                title: this.state.title,
                userId: parseInt(sessionStorage.getItem("credentials")),
                synopsis: this.state.synopsis,
                url: this.state.url,
                timestamp: new Date().toLocaleString()
            };

        //posts the object to the database, gets all news items, updates state of news array
            this.props.addNewsItem(newNewsItem)

        //closes the modal
            .then(this.toggle)
    }
};

    render(){
        return(
            <>
            <section className="eventSectionContent">
            <Button type="button"
            color="success"
            onClick={this.toggle}>
            Add Article
            </Button>
            </section>
            <div>
            <Modal isOpen={this.state.modal} toggle={this.toggle}

            className={this.props.className}

            >
                <ModalHeader toggle={this.toggle}>New News Item</ModalHeader>
                <ModalBody>
                <form>
                    <fieldset>
                        <div className="newNewsItemForm">
                        <input onChange={this.handleFieldChange} type="text"
                                id="title"
                                placeholder="Title"
                                required
                                autoFocus=""
                            /><br/>
                            <textarea onChange={this.handleFieldChange}
                                id="synopsis"
                                placeholder="Synopsis"
                                required
                            /><br/>
                            <input onChange={this.handleFieldChange} type="url"
                                id="url"
                                value={this.state.url}
                                required
                            /><br/>
                        </div>
                    </fieldset>
                </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.constructNewNewsItem}>Save</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
        </>
        )
    }
}

export default NewsItemNewModal