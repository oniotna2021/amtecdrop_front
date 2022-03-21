import React, { Component } from 'react';
import Login from './Login/Login';
import Footer from '../templates/Footer'
import Carrusel from '../templates/Carrusel';
import LogicaLogin from './Login/LogicaLogin';
import ComprarLo from './Comprar';


export default class About extends Component {
    
    render(){
      return(
        <div>
        <ComprarLo/>
      </div>
      )
      
    }
    
}