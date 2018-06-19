import React, { Component } from 'react';
import Recipe from './Recipe';
import Navbar from './Navbar';
import './RecipeApp.css';

class RecipeApp extends Component {
  static defaultProps = {
    recipes: [{
      title: "Spaghetti",
      ingredients: ["flour", "water"],
      instructions: "Mix ingredients",
      img: "spaghetti.jpg"
    }]
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        {this.props.recipes.map((r, index) => (
          <Recipe key={index} 
                  title={r.title}
                  ingredients={r.ingredients}
                  img={r.img}
                  instructions={r.instructions}
          />
        ))}
      </div>
    );
  }
}

export default RecipeApp;
