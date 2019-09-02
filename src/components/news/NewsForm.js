import React, { Component } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class NewsForm extends Component {






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