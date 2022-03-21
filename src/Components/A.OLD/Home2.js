import React, { Component } from 'react'
import Footer from "../templates/Footer";
import Carrusel from '../templates/Carrusel';
// import {db} from "../db";
import '../App.css'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    
    constructor() {
        super();
        this.state={
            productId:'',
            nombre: '',    
            unidades: '',
            precio_compra:'',
            precio_venta:'',
            detalle:'',
            categoria:'',
            imagen:'',
            __v:'',
            productos:[]           
            };
            
    }

    componentDidMount(){
        this.fetchProductos();
    }

    fetchProductos(){
        fetch('https://backend-galpon-c4.herokuapp.com/api/producto')
        .then(res => res.json())
        .then(data => {
            this.setState({productos: data});
            console.log(this.state.productos);

        });
        
        
    }

    render() {
        let componentReference = this;
        return (
            <div>
                <Carrusel />
                <br />
                <br />
                <br />

            
                          
            <h2>TODOS NUESTROS PRODUCTOS</h2>
            <br />
            <br />           
           <div className="containerProduct">
             {
                 this.state.productos.map(producto => {
                        return(
                            <div className='productElement'>
                            <h1>{producto.nombre}</h1>
                            <Link to={'/Products/'+ producto.productId}> 
                            <img 
                            src={producto.imagen} 
                            alt={producto.nombre} 
                            className='productImg' 
                            onClick={componentReference.handleClick}
                            />
                            </Link>
                            </div>
                        )
                 })



              //  alert('Alerta')
            //   Object.entries(db).map(function(k){
            //     return(
      
            //     <div className='productElement'>
            //       <h3>{k[1].nombre.toLocaleUpperCase()}</h3>

            //       <Link to={'/Products/'+ k[1].productId}>
            //       <img 
            //       src={k[1].imagen} 
            //       alt={k[1].nombre} 
            //       className='productImg' 
            //       onClick={componentReference.handleClick}
            //       />
            //       </Link>
            //    </div>   
                
            //     );
              
            //   })
              
              
              }
             </div>
       

                <br />
                <br />
                <br />

                <Footer />
            </div>
        )
    }
}

