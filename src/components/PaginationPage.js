import React from 'react';
import {Pagination} from 'react-bootstrap';
import {getLinks} from "../actions/linkAction";
import {connect} from 'react-redux';

class PaginationPage extends React.Component {
    onClickHandler= (num) => {
        this.props.getItems(num);
    };
    state ={
        pageSize: 5,
        currentPage: 1
    };

    render() {
        let data = JSON.parse(localStorage.getItem('links'));
        let itemCount = data.links.length;
        let pageCount = Math.ceil(itemCount / this.state.pageSize);

        let items= [];
        for (let number = 1; number <= pageCount; number++) {
            items.push(
                <Pagination.Item key={number} active={number === this.state.currentPage} onClick={() => this.onClickHandler(number)}>
                    {number}
                </Pagination.Item>,
            )
        }

        console.log(items);

        return (
            <div>
                <Pagination>
                    <Pagination.First/>
                    <Pagination.Prev/>
                    {items}
                    <Pagination.Next/>
                    <Pagination.Last/>
                </Pagination>;
            </div>
        )
    }
}

const mapDispatchToProps= (dispatch)=> {
    return {
        getItems: (pageNum) => dispatch(getLinks(pageNum))
    }
};

export default connect(null, mapDispatchToProps)(PaginationPage);