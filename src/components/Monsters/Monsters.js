import React, { Component } from 'react';
import { connect } from 'react-redux';

class Monsters extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MONSTERS', payload: '' });
    }
    
    render() {

        return (
            <>
             <h1>Monsters</h1>
             
            </>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default (connect(mapStateToProps)(Monsters));