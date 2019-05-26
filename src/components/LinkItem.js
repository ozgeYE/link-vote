import React from 'react';
import {Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import {deleteLink, upVote, downVote} from '../actions/linkAction';
import {showDeleteDialog} from '../actions/dialogAction';
import './ListItem.scss';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowAltCircleDown, faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons'

library.add(faArrowAltCircleDown);
library.add(faArrowAltCircleUp);

class LinkItem extends React.Component {
    onDeleteLink = (link) => {
        console.log(link);
        this.props.showDeleteDialog(link)
    };

    render() {
        const link = this.props.link;
        return (
            <div className="item-container col-sm-8">
                <div className="delete" onClick={() => this.onDeleteLink(link)}>X</div>
                <Row className="link-row">
                    <div className="point">
                        <div></div>
                        <div className="point-value">{link.point}</div>
                        <div className="point-text">POINTS</div>
                    </div>
                    <div className="info col-md-8 cols-m-12">
                        <div className="name">{link.name}</div>
                        <div className="url">({link.url})</div>
                        <div className="buttons">
                            <Button variant="link" onClick={() => this.props.upVoteLink(link.id)}>
                                <FontAwesomeIcon icon="arrow-alt-circle-up"/> Upvote Link
                            </Button>
                            <Button variant="link" onClick={() => this.props.downVoteLink(link.id)}>
                                <FontAwesomeIcon icon="arrow-alt-circle-down"/> Downvote Link
                            </Button>
                        </div>
                    </div>
                </Row>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteLink: (linkId) => dispatch(deleteLink(linkId)),
        upVoteLink: (linkId) => dispatch(upVote(linkId)),
        downVoteLink: (linkId) => dispatch(downVote(linkId)),
        showDeleteDialog: (linkName) => dispatch(showDeleteDialog(linkName))
    }
};

export default connect(null, mapDispatchToProps)(LinkItem);