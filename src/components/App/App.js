import React, {Component} from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';
import Nav from '../Nav/Nav'

class App extends Component {
    componentDidMount () {
        this.props.dispatch({type: 'FETCH_USER'})
    }

    render() {
        return (
        <Router>
            <Nav/>
            <div>
                
            <h1>D&D</h1>
            {/* <Switch> */}
                {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
                {/* <Redirect exact from="/" to="/dashboard" /> */}
                {/* Visiting localhost:3000/about will show the about page.
                This is a route anyone can see, no login necessary */}
                {/* <Route
                exact
                path="/search"
                component={Search} />
                <Route
                exact
                path="/pcn-view/:type/:id"
                component={PcnView}
                />
                <Route
                exact
                path="/eol-view/:type/:id"
                component={EolView}
                />
                <Route
                exact
                path="/npi-view/:type/:id"
                component={NpiView}
                />
                <Route
                exact
                path="/register"
                component={RegisterPage}
                /> */}
                {/* For protected routes, the view could show one of several things on the same route.
                Visiting localhost:3000/home will show the UserPage if the user is logged in.
                If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
                Even though it seems like they are different pages, the user is always on localhost:3000/home */}
                {/* <ProtectedRoute
                exact
                path="/dashboard"
                component={Dashboard}
                />
                <ProtectedRoute
                exact
                path="/pcn-form/:id"
                component={PcnForm}
                />
                <ProtectedRoute
                exact
                path="/eol-form/:id"
                component={EolForm}
                />
                <ProtectedRoute
                exact
                path="/npi-form/:id"
                component={NpiForm}
                /> */}
                {/* This works the same as the other protected route, except that if the user is logged in,
                they will see the info page instead. */}
    
                {/* If none of the other routes matched, we will show a 404. */}
                {/* <Route render={() => <h1>404</h1>} /> */}
            {/* </Switch> */}
            </div>
        </Router>
    )}
}

export default connect()(App);
