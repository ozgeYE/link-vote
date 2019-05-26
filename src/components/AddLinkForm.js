import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addLink} from '../actions/linkAction';

class AddLinkForm extends React.Component {
    state = {
        name: '',
        url: ''
    };

    onChangesHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    submitLink = (e) => {
        e.preventDefault();
        console.log(this.state);
        const link = {
            id: new Date().getTime(),
            name: this.state.name,
            url: this.state.url,
            point: 0
        };

        this.props.addLink(link);
    };

    render() {
        return (
            <Form>
                <Form.Group controlId="name">
                    <Form.Label>Link name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name"
                                  onChange={(e) => this.onChangesHandler(e)}/>
                </Form.Group>

                <Form.Group controlId="url">
                    <Form.Label>Link url</Form.Label>
                    <Form.Control type="text" placeholder="Enter url"
                                  onChange={(e) => this.onChangesHandler(e)}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e) => this.submitLink(e)}>
                    Add Link
                </Button>
            </Form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addLink: (link) => dispatch(addLink(link))
    }
};

export default connect(null, mapDispatchToProps)(AddLinkForm);