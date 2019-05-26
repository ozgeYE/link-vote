import React from 'react';
import {Modal, Button} from 'react-bootstrap';

class RemoveLinkDialog extends React.Component {
    render() {
        console.log('d satet', this.props.showDialog);
        return (
            <Modal.Dialog show={this.props.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Remove Link</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Do you want to remove link:</p>
                    <p>NAME</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Ok</Button>
                    <Button variant="primary">Cancel</Button>
                </Modal.Footer>
            </Modal.Dialog>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showDialog: state.dialogR
    }
};

export default connect(mapStateToProps)(RemoveLinkDialog);