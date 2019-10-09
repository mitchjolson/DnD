import React, { Component } from 'react';
import { connect } from 'react-redux';

class Conditions extends Component {
    
    render() {

        return (
            <>
             <h1>Conditions</h1>
            </>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default (connect(mapStateToProps)(Conditions));