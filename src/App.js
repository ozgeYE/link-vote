import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import LinkList from "./components/LinkList";
import AddLinkForm from "./components/AddLinkForm";
import './App.scss';


export class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Container>
                    <div className="header">
                        <div className="firm-name">
                            <span className="com">.com</span>
                        </div>
                        <div className="vote">
                            <span className="link">Link</span>
                            <span>VOTE</span>
                            <span> Challenge</span>
                        </div>
                    </div>
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
