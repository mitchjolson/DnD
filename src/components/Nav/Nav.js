import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = () => (
	<div className="nav">
    	<Link to="/home">
      	<h2 className="nav-title">D&D</h2>
    	</Link>
    <div className="nav-right">
     	<Link className="nav-link" to="/battle">
			Battle
      	</Link>
        <Link className="nav-link" to="/conditions">
        	Conditions
        </Link>
        <Link className="nav-link" to="/monsters">
        	Monsters
        </Link>
        <Link className="nav-link" to="/spells">
            Spells
        </Link>
    </div>
  </div>
);


const mapStateToProps = (reduxStore) => ({
  reduxStore
});

export default connect(mapStateToProps)(Nav);
