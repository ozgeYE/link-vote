import React from 'react';
import {connect} from 'react-redux';
import LinkItem from "./LinkItem";
import AddLink from "./AddLink";
import PaginationPage from "./PaginationPage";
import RemoveLinkDialog from './RemoveLinkDialog';
import AlertDialog from './AlertDialog';
import {Dropdown, DropdownButton} from 'react-bootstrap';
import {sortLinksAsc, sortLinksDesc, getLinks} from "../actions/linkAction";
import './LinkList.scss';

class LinkList extends React.Component {
    render() {
        const data = this.props.links;
        console.log(data.links);
        const linkList = data.links.length >= 0 ? data.links.map(l => {
            return (
                <LinkItem link={l} key={l.id} point={l.point}/>
            )
        }) : (
            <div>No Data</div>
        );

        return (
            <div className="link-list-container">
                <AlertDialog/>
                <AddLink/>
                <DropdownButton className="sort-menu col-sm-8"
                    title="Order by"
                    variant="secondary"
                    id="sort"
                    key="secondary"
                >
                    <Dropdown.Item eventKey="1" onClick={() => this.props.sortAsc()}>Most Voted (Z->A)</Dropdown.Item>
                    <Dropdown.Item eventKey="2" onClick={() => this.props.sortDesc()}>Less Voted (A->Z)</Dropdown.Item>
                </DropdownButton>
                <div className="list">
                    {linkList}
                </div>
                <div className="col-sm-8 pagination">
                    {/*<PaginationPage/>*/}
                </div>

                <RemoveLinkDialog/>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        links: state.linkR
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        sortAsc: () => dispatch(sortLinksAsc()),
        sortDesc: () => dispatch(sortLinksDesc()),
        getLinks: (page) => dispatch(getLinks(page))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LinkList);