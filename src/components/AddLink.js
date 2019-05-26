import React from 'react';
import {connect} from 'react-redux';
import {addLink} from '../actions/linkAction';
import './AddLink.scss';
import {
    withRouter
} from 'react-router-dom';

class AddLink extends React.Component {
    goAddLink = () => {
        this.props.history.push('/add-link');
    };

    render() {
        return (
            <div className="add-link-container col-sm-8" onClick={() => this.goAddLink()}>
                <div className="box">
                    <div className="sum">+</div>
                </div>
                <div className="text">Submit A Link</div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addLink: (link) => dispatch(addLink(link))
    }
};

export default connect(null, mapDispatchToProps)(withRouter(AddLink));