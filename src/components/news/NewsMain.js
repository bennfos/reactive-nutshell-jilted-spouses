import React, { Component } from 'react';
import NewsList from "./NewsList"
import NewsForm from "./NewsForm"
import NewsDataManager from "./NewsDataManager"



class NewsMain extends Component {

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
            NewsDataManager.postNewsItem(newsItem)
            .then(this.toggle)
            .then(()=> this.setState(()=>this.state.news.push(newsItem)))
            .then(()=> console.log(this.state.news))
        }
    };


    render() {
        return (
            <React.Fragment>
                <NewsForm
                handleFieldChange={this.handleFieldChange}
                state={this.state}
                toggle={this.toggle}
                constructNewNewsItem={this.constructNewNewsItem}
                {...this.props}/>
                <NewsList
                state={this.state}
                {...this.props}/>
            </React.Fragment>
        )
    }
}

export default NewsMain