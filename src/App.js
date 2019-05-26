import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import LinkList from "./components/LinkList";
import AddLinkForm from "./components/AddLinkForm";


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Container>
                    <Route exact path="/" component={LinkList}/>
                    <Route path="/link-list" component={LinkList}/>
                    <Route path="/add-link" component={AddLinkForm}/>
                </Container>
            </BrowserRouter>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        links: state.linkR.links
    }
};

export default connect(mapStateToProps)(App);
