import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addLink} from '../actions/linkAction';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons'
import {withRouter} from 'react-router-dom';
import {hideAlert, showAlert} from "../actions/dialogAction";
import AlertDialog from '../components/AlertDialog';


library.add(faArrowAltCircleLeft);

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
        const link = {
            id: new Date().getTime(),
            name: this.state.name,
            url: this.state.url,
            point: 0
        };

        this.props.addLink(link);
        this.props.showAlert(link, "add");
        setTimeout(() => this.props.hideAlert(), 1000);
    };

    goLinkList = () => {
        this.props.history.push('/link-list');
    };

    render() {
        return (
            <div>
                <AlertDialog/>
                <Button variant="link" onClick={() => this.goLinkList()}>
                    <FontAwesomeIcon icon="arrow-alt-circle-left"/>
                </Button>
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
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addLink: (link) => dispatch(addLink(link)),
        showAlert: (link, alertType) => dispatch(showAlert(link, alertType)),
        hideAlert: () => dispatch(hideAlert()),
    }
};

export default connect(null, mapDispatchToProps)(withRouter(AddLinkForm));