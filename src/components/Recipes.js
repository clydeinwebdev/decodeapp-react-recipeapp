import React, { Component } from 'react';

class Recipes extends Component{
	render(){
		return (
	        <div className="col s3">
	          <div className="card hoverable">
	            <div className="card-image">
	              <img src={this.props.image} alt="" />
	              <span className="card-title">{this.props.cardTitle}</span>
	            </div>
	            <div className="card-content">
	              <p>{this.props.cardContent}</p>
	            </div>
	            <div className="card-action">
	              <a href="#">This is a link</a>
	            </div>
	          </div>
	        </div>
		);
	}
}

export default Recipes;