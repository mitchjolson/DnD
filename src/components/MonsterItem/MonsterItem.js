import React, { Component } from 'react';
import { connect } from 'react-redux';

class MonsterItem extends Component {

    componentDidMount() {

    }

    render() {

        return (
            <>
            <tr>
                <td>{this.props.monster.name}</td>
                <td>{this.props.monster.challenge_rating}</td>
                <td>{this.props.monster.type}</td>
                <td>{this.props.monster.size}</td>
            </tr>
            </>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default (connect(mapStateToProps)(MonsterItem));