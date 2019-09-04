import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import NewsDataManager from './NewsDataManager'

class NewsEditModal extends Component {

//Defines initial state
    state = {
        news: [],
        title: "",
        url: "",
        synopsis: "",
        loadingStatus: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            news: [],
            title: "",
            url: "",
            synopsis: "",
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

//Displays/hides the edit modal
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
    };


    editExistingNewsItem = (event) => {
        event.preventDefault();

    //Validates user input
        if (this.state.title === ""||
        this.state.url === "" ||
        this.state.synopsis === "") {
            alert("Please fill out all fields");
        } else {
            this.setState({ loadingStatus: true });

        //creates a new object for the edited news item,
            const editedNewsItem = {
                id: this.props.newsItem.id,
                title: this.state.title,
                userId: parseInt(sessionStorage.getItem("credentials")),
                url: this.state.url,
                synopsis: this.state.synopsis
            };
            console.log(editedNewsItem.id)
        //posts the object to the database
            this.props.postEditedNewsItem(editedNewsItem)

        //closes the modal
            .then(this.toggle)
    }
};

//Gets the id of the news item that is being edited and sets state to populate the input fields
    componentDidMount() {
        NewsDataManager.getNewsItem(this.props.newsItem.id)
        .then(newsItem => {
            this.setState({
            title: newsItem.title,
            url: newsItem.url,
            synopsis: newsItem.synopsis,
            loadingStatus: false,
            });
        });
    }

    render(){
        return(
            <>
            <section className="eventSectionContent">
            <Button type="button"
            color="success"
            onClick={this.toggle}>
            Edit
            </Button>
            </section>
            <div>
            <Modal isOpen={this.state.modal} toggle={this.toggle}

            className={this.props.className}

            >
                <ModalHeader toggle={this.toggle}>Edit News</ModalHeader>
                <ModalBody>
                <form>
                    <fieldset>
                        <div className="editNewsForm">
                            <input onChange={this.handleFieldChange} type="text"
                                id="title"
                                value={this.state.title}
                                required
                                autoFocus=""
                            /><br/>
                            <textarea onChange={this.handleFieldChange}
                                id="synopsis"
                                value={this.state.synopsis}
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
                    <Button color="primary" onClick={this.editExistingNewsItem}>Save</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
        </>
        )
    }
}

export default NewsEditModal