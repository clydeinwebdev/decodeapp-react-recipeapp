import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import Nav from './components/Nav';
import Footer from './components/Footer';
import RecentRecipes from './components/RecentRecipes';
import Recipes from './components/Recipes';
import CreateRecipe from './components/CreateRecipe';

class App extends Component {
  render() {
    return (
      <div>
      <Nav />
      <div className="container">
        <h5 className="center-align">Recent Recipes</h5>
        <div className="row">
          <RecentRecipes 
            image="http://materializecss.com/images/sample-1.jpg"
            cardTitle="Card Title"
            cardContent="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively." 
            />
          <RecentRecipes 
            image="http://materializecss.com/images/sample-1.jpg"
            cardTitle="Card Title"
            cardContent="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively." 
            />
          <RecentRecipes 
            image="http://materializecss.com/images/sample-1.jpg"
            cardTitle="Card Title"
            cardContent="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively." 
            />                        
        </div>

        <h5 className="center-align">Recipes</h5>
          <nav>
            <div className="nav-wrapper">
              <form>
                <div className="input-field">
                  <input id="search" type="search" required />
                  <label htmlFor="search"><i className="material-icons">search</i></label>
                  <i className="material-icons">close</i>
                </div>
              </form>
            </div>
          </nav>
          <div className="row">
            <Recipes 
              image="http://materializecss.com/images/sample-1.jpg"
              cardTitle="Card Title"
              cardContent="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively." 
              />
            <Recipes 
              image="http://materializecss.com/images/sample-1.jpg"
              cardTitle="Card Title"
              cardContent="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively." 
              />
            <Recipes 
              image="http://materializecss.com/images/sample-1.jpg"
              cardTitle="Card Title"
              cardContent="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively." 
              />
            <Recipes 
              image="http://materializecss.com/images/sample-1.jpg"
              cardTitle="Card Title"
              cardContent="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively." 
              />
            <Recipes 
              image="http://materializecss.com/images/sample-1.jpg"
              cardTitle="Card Title"
              cardContent="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively." 
              />
            <Recipes 
              image="http://materializecss.com/images/sample-1.jpg"
              cardTitle="Card Title"
              cardContent="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively." 
              />
            <Recipes 
              image="http://materializecss.com/images/sample-1.jpg"
              cardTitle="Card Title"
              cardContent="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively." 
              />                                                         
          </div>

          <CreateRecipe />

        </div>
      
      <Footer /> 
      </div>
    );
  }
}

export default App;
