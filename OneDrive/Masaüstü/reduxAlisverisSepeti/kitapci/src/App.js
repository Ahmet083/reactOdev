import React from "react";
import { connect } from 'react-redux';
import { Route } from "react-router-dom";


import Products from './components/Products';
import Cart from './components/Cart'
 


const App = (props) => {
  console.log (props.bookList)
  return (
    <div className="App">
    <h1>Alisveris Sepeti Yapimi
      
      <img src="./img/simyaci.jpg"
      alt="React Dersleri" className="simyaci" /> {""} React Dersleri
    </h1>
    <Route exact path="/" component={Products} />
    <Route path="/cart" component={Cart} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    bookList: state.bookList
  };
};
export default connect (mapStateToProps) (App)


