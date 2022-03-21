import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carrusel from "../../templates/Carrusel";
import Footer from "../../templates/Footer";
import axios from "axios";
import {Card,Button} from 'react-bootstrap'
// import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs";

export default class logicLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      selector: false,
      clienteT: [],
      clave: "",
      emailC: "",
    };

    this.renderLogin = this.renderLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderRecoverPasword = this.renderRecoverPasword.bind(this);
    this.loginCliente = this.loginCliente.bind(this);
    this.goToRecover = this.goToRecover.bind(this);
    this.comprar = this.comprar.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this)
  }

  // componentDidMount(){
  //     this.render();
  // }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    // console.log(e.target.value);
  }

  buscarCliente = async () => {
    const email = this.state.email;
    let url = "http://localhost:4000/api/login/" + email;
    await axios
      .get(url)
      .then((res) => {
        this.state.clienteT = res.data;
        this.clave = this.state.clienteT[0].password;
        this.state.emailC = this.state.clienteT[0].email;
      })
      .catch((error) => {
        console.log(error);
      });

    const validPass = await bcrypt.compare(this.state.password, this.clave);
    if (!validPass) {
      alert("Contraseña invalida");
    } else {
      // alert('Si coinciden')
      var aleato = Math.floor(Math.random() * 10000000001);
      localStorage.setItem("ref", aleato);
      localStorage.setItem("nombre", this.state.clienteT[0].nombre);
      localStorage.setItem("apellido", this.state.clienteT[0].apellido);
      localStorage.setItem("direccion", this.state.clienteT[0].direccion);
      localStorage.setItem("email", this.state.clienteT[0].email);
      localStorage.setItem("class", this.state.clienteT[0].clasificacion);
      window.location.reload();
    }
  };

  loginCliente() {
    const url = "http://localhost:4000/api/cliente";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "aplication/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token === undefined) {
          alert("Datos invalidos !, revisa y vuelve a intentar");
        } else {
          localStorage.setItem("ref", data.token);
          localStorage.setItem("nombre", data.nombre);
          localStorage.setItem("apellido", data.apellido);
          localStorage.setItem("direccion", data.direccion);
          localStorage.setItem("email", data.email);
          localStorage.setItem("class", data.clasificacion);
          alert("Sesion iniciada");
          window.location.href = "./";
        }
      });
  }
  render() {
    if (this.state.selector === false) {
      return this.renderLogin();
    } else {
      return this.renderRecoverPasword();
    }
  }

  goToRecover() {
    this.setState({ selector: true });
  }

  goToLogin() {
    this.setState({ selector: false });
  }

  comprar(){
    window.location.replace('/Comprar')
  }

  tienda(){
    window.location.replace('/Tienda')
  }

  renderRecoverPasword() {
    return (
      <div>
        <Carrusel />
        <div class="home container">
          <h2 class="text-center bg-secondary fw-bold super-container text-white mt-3">
            RECUPERA TU CONSTRASEÑA
          </h2>
          <h3 class="text-center fw-bold super-container mt-3">
            Introduce tu correo y recibiras instrucciones para la recuperacion,
            si no ves el correo recuerda revisar la carpeta SPAM
          </h3>

          <form
            onSubmit={() =>
              this.buscarCliente(this.state.email, this.state.password)
            }
          >
            <div className="container">
              <div class="mb-3 row">
                <label for="nombre" class="col-sm-2 col-form-label">
                  <h5>Correo</h5>
                </label>
                <div class="col-sm-10">
                  <input
                    name="email"
                    onChange={this.handleChange}
                    type="email"
                    class="form-control"
                    id="email"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-success">
                ENVIAR
              </button>
            </div>
          </form>
          <br />
          <button onClick={() => this.goToLogin()} className="btn btn-warning">
            Regresar al Login
          </button>
        </div>

        <Footer />
      </div>
    );
  }

  renderLogin() {
    const ref = localStorage.getItem("ref");
    if (!ref) {
      return (
        <div>
          <Carrusel />
          <div class="home container">
            <h2 class="text-center bg-secondary fw-bold super-container text-white mt-3">
              INICIO DE SESION
            </h2>
            <h3 class="text-center fw-bold super-container mt-3">
              Introduce tu correo y contraseña
            </h3>

            <form>
              <div className="container">
                <div class="mb-3 row">
                  <label for="nombre" class="col-sm-2 col-form-label">
                    Correo
                  </label>
                  <div class="col-sm-10">
                    <input
                      name="email"
                      onChange={this.handleChange}
                      type="email"
                      class="form-control"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="password" class="col-sm-2 col-form-label">
                    Password
                  </label>
                  <div class="col-sm-10">
                    <input
                      name="password"
                      onChange={this.handleChange}
                      type="password"
                      class="form-control"
                      id="password"
                      required
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => this.buscarCliente()}
                  className="btn btn-success"
                >
                  ENTRAR
                </button>
              </div>
            </form>
            <br />
            <button
              onClick={() => this.goToRecover()}
              className="btn btn-primary"
            >
              OLVIDASTE TU CONTRASEÑA
            </button>
          </div>

          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <Carrusel />
          <br />
          <h3 className="mt-4">BIENVENIDO A SOLUCIONES AMTEC</h3>
          <br />
          <h4>Puedes ver tu carrito de compras o visitar nuestra tienda</h4>
          <br />

          <div className="products mb-3 row justify-content-center">

            <Card style={{ width: "20rem",marginLeft:"2rem" }}>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxBi4Tc7OFN9SrwZDh8YZLdSG4lcYDQHyxcA&usqp=CAU"/>
              <Card.Body>
                <Card.Title><strong>CARRITO</strong></Card.Title>
                <Card.Text>
                  Visita tu carrito para ajustar cantidades y procesar el pago de tus productos seleccionados
                </Card.Text>
                <Button  onClick={() => this.comprar()}  variant="primary">PROCESAR</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "20rem", marginLeft:"2rem" }}>
              <Card.Img style={{ marginTop :"2rem" }} variant="top" src="https://socialyaakun.com/wp-content/uploads/2018/02/ecommerce.jpg" />
              <Card.Body>
                <Card.Title><strong>TIENDA</strong></Card.Title>
                <Card.Text>
                  Visita nuestra tienda donde encontraras una amplia variedad de productos, repuestos y partes de portatiles
                </Card.Text>
                <Button  onClick={() => this.tienda()} variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

          </div>

          <br />
          <Footer />
        </div>
      );
    }
  }
}
