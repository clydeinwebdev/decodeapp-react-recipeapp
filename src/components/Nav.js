import React, { Component } from 'react';

class Nav extends Component{
	render(){
		return (
			<nav>
	          <div className="nav-wrapper">
	            <a href="#" className="brand-logo">Sud-an</a>
	            <ul id="nav-mobile" className="right hide-on-med-and-down">
	              <li><a href="sass.html">Recipes</a></li>
	              <li><a href="badges.html">Create New</a></li>
	            </ul>
	          </div>
	        </nav>
		);
	}
}

export default Nav;