import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import NewsDataManager from './NewsDataManager'

class NewsEditModal extends Component {
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

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    editExistingNewsItem = (event) => {
        event.preventDefault();
        if (this.state.title === ""||
        this.state.url === "" ||
        this.state.synopsis === "") {
            alert("Please fill out all fields");
        } else {
            console.log(this.props)
            this.setState({ loadingStatus: true });
            const editedNewsItem = {
                id: this.props.newsItem.id,
                title: this.state.title,
                url: this.state.url,
                synopsis: this.state.synopsis
            };
            this.props.postEditedNewsItem(editedNewsItem)
            .then(this.toggle)
    }
};

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