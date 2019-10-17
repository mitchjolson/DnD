import React, { Component } from 'react';
import { connect } from 'react-redux';

import MonsterItem from '../MonsterItem/MonsterItem';

class Monsters extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MONSTERS' });
    }

    render() {

        return (
            <>
             <h1>Monsters</h1>
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