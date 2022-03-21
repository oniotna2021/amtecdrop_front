import React, { Component } from 'react'
import Footer from '../templates/Footer'
import Carrusel from '../templates/Carrusel'

export default class Contacto extends Component {

    constructor() {
        super();
        this.state={
            nombre:'',
            email: '',
            telefono: '',
            mensaje: ''   
        };
        this.handleChange = this.handleChange.bind(this);
        this.enviarMensaje = this.enviarMensaje.bind(this)
    }

    handleChange(e,text){
        const {name,value} = e.target;
        this.setState({
            [name]:value,
        });
        console.log(e.target.value);
    }

    enviarMensaje(){
        fetch('http://localhost:4000/api/contacto',{
            method:'POST',
            body: JSON.stringify(this.state),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .then( alert('Mensaje enviado'))
        .catch(err => console.error(err))  
    }
    render() {
        return (
            <div>
                <br />
                <Carrusel />
                <br />
                 <form onSubmit={this.enviarMensaje} class="form-horizontal">
                    <fieldset>
                        <legend class="text-center header"><h3>Envianos una consulta</h3></legend>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="fname" onChange={this.handleChange} name="nombre" type="text" placeholder="Nombre completo" class="form-control" />
                            </div>
                        </div>
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="email" onChange={this.handleChange}  name="email" type="text" placeholder="Email" class="form-control" />
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="phone" onChange={this.handleChange}  name="telefono" type="text" placeholder="Telefono" class="form-control" />
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                            <div class="col-md-8">
                                <textarea class="form-control" id="message" onChange={this.handleChange}  name="mensaje" placeholder="Envia tu mensaje y uno de nuestros asesores te respondera en un lapso no mayor a 48 horas" rows="7"></textarea>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-12 text-center">
                                <button type="submit" class="btn btn-primary btn-lg">ENVIAR</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
                <br />
                <Footer />
                <br />
            </div>
        )
    }
}
