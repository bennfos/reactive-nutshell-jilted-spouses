import React, { Component } from 'react';
import NewsDataManager from './NewsDataManager'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class NewsForm extends Component {

    state = {
        news: [],
        title: "",
        url: "",
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

    componentDidMount() {
        NewsDataManager.getAllNews()
            .then(news => {
                this.setState({
                    news: news
                })
            })
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
        event.preventDefault();
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
            this.addNewsItem
        }
    };

    render(){
        return(
            <>
            <section className="newsSectionContent">
            <Button type="button"
            color="success"
            onClick={this.props.toggle}>
            New Article
            </Button>
            </section>
            <div>
            <Modal isOpen={this.props.state.modal} toggle={this.props.toggle} className={this.props.className}>
                <ModalHeader toggle={this.props.toggle}>Add Article</ModalHeader>
                <ModalBody>
                <form>
                    <fieldset>
                        <div className="addNewsItemForm">
                            <input onChange={this.props.handleFieldChange} type="text"
                                id="title"
                                placeholder="Title of article"
                                required
                                autoFocus=""
                            /><br/>
                            <input onChange={this.props.handleFieldChange} type="text"
                                id="url"
                                placeholder="URL"
                                required
                            /><br/>
                            <textarea onChange={this.props.handleFieldChange}
                                id="synopsis"
                                placeholder="Synopsis"
                                required
                            ></textarea><br/>
                        </div>
                    </fieldset>
                </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.props.constructNewNewsItem}>Submit</Button>{' '}
                    <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
        </>
        )
    }
}

export default NewsForm