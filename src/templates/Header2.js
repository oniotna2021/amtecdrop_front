import React, { Component } from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import axios from 'axios'

export default class Header2 extends Component {
  
  constructor(){
    super();
    this.state={
      user:localStorage.getItem('email'),
      carritos:[],
      articulos:0
    }
    this.buscarCarritos = this.buscarCarritos.bind(this)
  }

  componentDidMount(){
    if(!this.state.user){
      this.setState({user:''})
    }
    this.buscarCarritos()
  }

  async buscarCarritos(){
    const email = localStorage.getItem('email')
    let url='http://localhost:4000/api/carrito/'+email;
    await axios.get(url)
    .then(res => {
     this.setState({carritos:res.data})
    })
    .catch((error) => {
      console.log(error); 
    });   
    var articulos = 0
      
    this.state.carritos.forEach(element => {
        articulos = articulos + element.cantidad
        this.setState({articulos:articulos})
    });
  }

   
  onClicDs=()=>{
      localStorage.removeItem('nombre');
      localStorage.removeItem('apellido'); 
      localStorage.removeItem('direccion'); 
      localStorage.removeItem('ref'); 
      localStorage.removeItem('email');    
      localStorage.removeItem('class');
      localStorage.removeItem('shared');
      window.location.reload();
  } 

    render() {
        const mensaje = 'USUARIO: '+this.state.user
        return (
            <div className="header">
            <Navbar className="header" bg="light" expand="lg">
            <Container>
              {/* <Navbar.Brand href="/"><h2>soluciones AMTEC</h2></Navbar.Brand> */}
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/"><h4>Tienda</h4></Nav.Link>
                  <Nav.Link href="/Registrar"><h4>Registrar</h4></Nav.Link>
                  {/* <Nav.Link href="/Administrar"><h4>Administrar</h4></Nav.Link>
                  <Nav.Link href="/Tienda"><h4>Tienda</h4></Nav.Link>
                  <Nav.Link href="/Prueba"><h4>Prueba</h4></Nav.Link>  */}
                  <Nav.Link className='container-product' href="/Comprar">
                  
                  <span class="badge bg-dark text-white ms-1 rounded-pill">{this.state.articulos}<img className='imagenalto' src="https://solucionesamtec.com.co/imagenes/drop/cart1.gif" alt="carrito AMTEC" /></span>
                  </Nav.Link>                
                <button className="btn btn-sm btn-outline-secondary" type="button" onClick={this.onClicDs}>
                  <Nav.Link href="/Login"><h4>Salir</h4></Nav.Link>
                </button> 
                <button className="btn btn-sm btn-outline-secondary" type="button">
                  <Nav.Link href="/Login"><h4>Login</h4></Nav.Link>
                </button> 
                <span className='mx-4 mt-3'><h4>{mensaje}</h4></span>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          </div>
        )
    }
}
