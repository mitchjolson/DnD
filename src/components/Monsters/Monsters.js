import React, { Component } from 'react';
import { connect } from 'react-redux';

class Monsters extends Component {

    componentDidMount() {
        // this.props.dispatch({ type: 'FETCH_MONSTERS', payload: '' });
    }

    addMonsters() {
        this.props.dispatch({ type: 'ADD_MONSTERS', payload: this.props.reduxStore.monsters.results})
    }
    
    render() {

        return (
            <>
             <h1>Monsters</h1>
             <button onClick={()=>this.addMonsters()}>Add</button>
            </>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default (connect(mapStateToProps)(Monsters));