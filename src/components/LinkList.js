import React from 'react';
import {connect} from 'react-redux';
import LinkItem from "./LinkItem";
import AddLink from "./AddLink";
import PaginationPage from "./PaginationPage";
import {DropdownButton, Dropdown, SplitButton} from 'react-bootstrap';

class LinkList extends React.Component {
    render() {
        const links = this.props.links;
        const linkList = links.length >= 0 ? links.map(l => {
            return (
                <LinkItem link={l} key={l.id} point={l.point}/>
            )
        }) : (
            <div>No Data</div>
        );

        return (
            <div>
                <AddLink/>
                <DropdownButton
                    title="Order by"
                    variant="secondary"
                    id="sort"
                    key="secondary"
                >
                    <Dropdown.Item eventKey="1">Most Voted (Z->A)</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Less Voted (A->Z)</Dropdown.Item>
                </DropdownButton>
                {linkList}
                <PaginationPage />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        links: state.linkR.links
    }
};
const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps)(LinkList);