import React, {Component} from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';
import Nav from '../Nav/Nav';
import Conditions from '../Conditions/Conditions';
import Monsters from '../Monsters/Monsters';

class App extends Component {

    render() {
        return (
        <Router>
            <Nav/>
            <div>
                <Switch>
                {/* Visiting localhost:3000 will redirect to localhost:3000/conditions */}
                <Redirect exact from="/" to="/conditions" />
                <Route
                    exact
                    path="/conditions"
                    component={Conditions} />
                <Route
                    exact
                    path="/monsters"
                    component={Monsters} />
                {/* <Route
                    exact
                    path="/pcn-view/:type/:id"
                    component={PcnView}
                /> */}
                {/* <Route
                    exact
                    path="/eol-view/:type/:id"
                    component={EolView}
                /> */}
                {/* <Route
                    exact
                    path="/npi-view/:type/:id"
                    component={NpiView}
                /> */}
                {/* <Route
                    exact
                    path="/register"
                    component={RegisterPage}
                /> */}

    
                {/* If none of the other routes matched, we will show a 404. */}
                <Route render={() => <h1>404</h1>} />
            </Switch>
            </div>
        </Router>
    )}
}

export default connect()(App);
