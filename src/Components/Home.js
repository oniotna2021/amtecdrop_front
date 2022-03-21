import React, { Component } from "react";
import Footer from "../templates/Footer";
import Carrusel from "../templates/Carrusel";
import Header from "../templates/Header2"
import Tienda from "../Components/Productos/LogicShop"

//import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
    
    <div>
     
      <Carrusel />
      <br />
      <h1>En construccion</h1>
      <br />
      <Footer />
    </div> 

    );
  }
}
