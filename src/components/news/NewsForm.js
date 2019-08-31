import React, { Component } from 'react';
import NewsDataManager from './NewsDataManager';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class NewsForm extends Component {
    state = {
        title: "",
        url: "",
        synopsis: "",
        timestamp: "",
        loadingStatus: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            title: "",
            url: "",
            synopsis: "",
            timestamp: "",
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    };

    constructNewNewsItem = event => {
        if (this.state.title === ""||
        this.state.url === "" ||
        this.state.synopsis === "") {
            alert("Please fill out all fields");
        } else {
            this.setState({ loadingStatus: true });
            const newsItem = {
                title: this.state.title,
                url: this.state.url,
                synopsis: this.state.synopsis,
                timestamp: new Date().toLocaleString()
            };
            NewsDataManager.postNewsItem(newsItem)
            .then(this.toggle)
            .then(this.props.history.push('/news'))
        }
    };

    render(){
        return(
            <>
            <section className="newsSectionContent">
            <Button type="button"
            color="success"
            onClick={this.toggle}>
            New Article
            </Button>
            </section>
            <div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Add Article</ModalHeader>
                <ModalBody>
                <form>
                    <fieldset>
                        <div className="addNewsItemForm">
                            <input onChange={this.handleFieldChange} type="text"
                                id="title"
                                placeholder="Title of article"
                                required
                                autoFocus=""
                            /><br/>
                            <input onChange={this.handleFieldChange} type="text"
                                id="url"
                                placeholder="URL"
                                required
                            /><br/>
                            <textarea onChange={this.handleFieldChange}
                                id="synopsis"
                                placeholder="Synopsis"
                                required
                            ></textarea><br/>
                        </div>
                    </fieldset>
                </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.constructNewNewsItem}>Submit</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
        </>
        )
    }
}

export default NewsForm