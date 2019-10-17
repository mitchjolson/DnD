import React, { Component } from 'react';
import { connect } from 'react-redux';

import MonsterItem from '../MonsterItem/MonsterItem';

class Monsters extends Component {

    state = {
        search: '',
    };

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MONSTERS' });
    };

    handleChangeFor = (event, propToChange) => {
        this.setState({
            [propToChange]: event.target.value
        })
        // this.props.dispatch({ type: 'SEARCH_MONSTERS', payload: this.state.search });
    };

    handleSubmit = () => {
        this.props.dispatch({ type: 'SEARCH_MONSTERS', payload: this.state.search });
    };

    render() {

        return (
            <>
             <h1>Monsters</h1>
             <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Monster Name: </label>
                    <input type="text" value={this.state.search} onChange={(event) => this.handleChangeFor(event, 'search')} />
                    <button type="submit">Search</button>
                </form>
                </div>
             <div>
                 <table>
                     <thead>
                         <tr>
                             <th>Name</th>
                             <th>Challenge Rating</th>
                             <th>Type</th>
                             <th>Size</th>
                         </tr>
                     </thead>
                     <tbody>
                        {this.props.reduxStore.monsters.map(monster => <MonsterItem key={monster.id} monster={monster} history={this.props.history} />)}
                     </tbody>
                 </table>
             </div>
            </>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default (connect(mapStateToProps)(Monsters));