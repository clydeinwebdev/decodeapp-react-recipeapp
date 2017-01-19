import React, { Component } from 'react';

class CreateRecipe extends Component{
	addIngredients(e){
		e.preventDefault();

		let html = `
			<div class="row">
                <div class="input-field col s6">
                  <i class="material-icons prefix">account_circle</i>
                  <input ref="txtName" id="icon_prefix" type="text" class="validate" />                  
                  <label htmlFor="icon_prefix">Name</label>
                </div>
                <div class="input-field col s6">
                  <i class="material-icons prefix">account_circle</i>
                  <input ref="txtName" id="icon_prefix" type="text" class="validate" />                  
                  <label htmlFor="icon_prefix">Name</label>
                </div>
            </div>  
		`;
		this.refs.ingredients.innerHTML += html;
		// console.log(this.refs.txtName.value);
	}

	render(){
		return (
			<div>
          <h5 className="center-align">Create New Recipe</h5>
          <div className="row">
            <div className="col s12">
              <a className="waves-effect waves-light btn">SAVE</a>
              <a className="waves-effect waves-light btn right disabled">ID: 5</a>              
            </div>
          </div>

          <div className="row">
            <form>
              <div className="row">
                <div className="input-field col s6">
                  <i className="material-icons prefix">account_circle</i>
                  <input ref="txtName" id="icon_prefix" type="text" className="validate" />                  
                  <label htmlFor="icon_prefix">Name</label>
                </div>                
                <div className="input-field col s6">
                  <i className="material-icons prefix">phone</i>
                  <input id="icon_telephone" type="tel" className="validate" />                  
                  <label htmlFor="icon_telephone">Photo URL</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">phone</i>
                  <textarea id="icon_telephone" type="tel" className="materialize-textarea validate"></textarea>
                  <label htmlFor="icon_telephone">Description</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s4">
                  <i className="material-icons prefix">account_circle</i>
                  <input id="icon_prefix" type="text" className="validate" />
                  <label htmlFor="icon_prefix">Preparation Time</label>
                </div>                
                <div className="input-field col s4">
                  <i className="material-icons prefix">phone</i>
                  <input id="icon_telephone" type="tel" className="validate" />
                  <label htmlFor="icon_telephone">Cooking TIme</label>
                </div>               
                <div className="input-field col s4">
                  <i className="material-icons prefix">phone</i>
                  <input id="icon_telephone" type="tel" className="validate" />
                  <label htmlFor="icon_telephone">Yield</label>
                </div>
              </div> 
              <div className="row">
                <div className="col s6">
                  <button onClick={this.addIngredients.bind(this)} className="btn-floating teal waves-effect waves-light red"><i className="material-icons">add</i></button>
                  &nbsp; Add Ingredients
                  <div ref="ingredients"></div>
                </div>
                <div className="col s6">
                   <button className="btn-floating teal waves-effect waves-light red"><i className="material-icons">add</i></button>
                  &nbsp; Add Procedure
                </div>
              </div>             
            </form>
          </div>
          </div>
		);
	}
}

export default CreateRecipe;          