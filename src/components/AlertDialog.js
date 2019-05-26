import React from 'react';
import {Alert} from 'react-bootstrap';
import {connect} from 'react-redux';

class AlertDialog extends React.Component {
    render() {
        const showAlert = this.props.showDialog.showAlert;
        const link = this.props.showDialog.link;
        const alertType = this.props.showDialog.alertType;


        return (
            <Alert show={showAlert} variant="success">
                <p className="link-name">
                    {link && link.name ? link.name.toUpperCase() : 'No link Name'}
                    {alertType === 'delete' ? ' removed' : ' added'}
                </p>
            </Alert>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        showDialog: state.dialogR
    }
};

export default connect(mapStateToProps)(AlertDialog);