import React from 'react';
import {connect} from 'react-redux';
import {addLink} from '../actions/linkAction';
import './AddLink.scss';

class AddLink extends React.Component {
    render() {
        return (
            <div className="add-link-container col-sm-8">
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

export default connect(null, mapDispatchToProps)(AddLink);