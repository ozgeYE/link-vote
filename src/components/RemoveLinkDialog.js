import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {deleteLink} from '../actions/linkAction';
import {hideDeleteDialog, showAlert, hideAlert} from '../actions/dialogAction';

class RemoveLinkDialog extends React.Component {
    handleClose = () => {
        this.props.hideDialog();
    };

    deleteLink = (link) => {
        this.props.deleteLink(link.id);
        this.props.hideDialog();
        this.props.showAlert(link, 'delete');
        setTimeout(() => this.props.hideAlert(), 1000);
    };

    render() {

        const dialogState = this.props.showDialog.showDeleteDialog;
        const link = this.props.showDialog.link;
        return (

            <div>
                <Modal show={dialogState} onHide={() => this.handleClose()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Remove Link</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>Do you want to remove link:</div>
                        <div>{link && link.name ? link.name : 'no link name'}</div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.deleteLink(link)}>
                            Ok
                        </Button>
                        <Button variant="primary" onClick={() => this.handleClose()}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        showDialog: state.dialogR
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteLink: (linkId) => dispatch(deleteLink(linkId)),
        hideDialog: () => dispatch(hideDeleteDialog()),
        showAlert: (link, alertType) => dispatch(showAlert(link, alertType)),
        hideAlert: () => dispatch(hideAlert()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RemoveLinkDialog);