import React, { Component} from 'react'
import Footer from '../templates/Footer'
import Carrusel from '../templates/Carrusel'
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios'

export default class Registrar extends Component {

    constructor() {
        super();
        this.state={
            nombre:'',
            apellido: '',
            email: '',
            email2:'',
            telefono: '',
            pais: '',
            ciudad: '',
            direccion: '',
            documento:'',
            clasificacion: '',
            echeck:false,
            celcheck:false,
            regcomp:false,
            fiscaltype:'',
            password: '',
            password2: '',
            emailComp:'',
            mailcode:'',
            ip:'',
            hora:'',
            fecha:''
        };
        this.agregarCliente = this.agregarCliente.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.cambio = this.cambio.bind(this);
        
    }

    async componentDidMount(){
        localStorage.removeItem('shared')
        const res = await axios.get('https://geolocation-db.com/json/')
        this.setState({ip:res.data.IPv4})
        var hoy = new Date();
        var horacalc = hoy.getHours()+':'+hoy.getMinutes()+':'+hoy.getSeconds()
        this.setState({hora:horacalc})
        var fechacalc = hoy.getDate() + '-'+hoy.getMonth()+'-'+hoy.getFullYear()
        this.setState({fecha:fechacalc})

    }

    async agregarCliente(e){
        const email = this.state.email
        let url='http://localhost:4000/api/nueva/'+email;
        await axios.get(url)
        .then(res => {
            alert(JSON.stringify(res.data[0].email))
            this.state.emailComp=res.data[0].email
        })
        .catch((error) => {
        console.log(error); 
        });   

            if(this.state.email!==this.state.email2){
                alert('Los email son distintos !')
                e.preventDefault()
               
            }else{

                if(this.state.emailComp===this.state.email){
                    alert('Este Email ya esta registrado')
                    e.preventDefault()
                }else{
                    if(this.state.password!==this.state.password2){
                        alert('Las contraseñas no coinciden !')
                        e.preventDefault()
    
                    }else{
                        if(!localStorage.getItem('shared')){
                            alert('No has verificado el captcha !')
                            e.preventDefault()
                        }else{
                            const uri='http://localhost:4000/api/cliente'
                            fetch(uri,{
                            method:'POST',
                            body: JSON.stringify(this.state),
                            mode:'cors',
                            headers:{
                                'Accept':'application/json',
                                'Content-Type':'application/json'
                            }
                        }.then( alert('Usuario registrado, verifica tu email para validar')))
                        .then(window.location.replace('/Login')
                        ).then(data => {
                            this.setState({
                                nombre:'',
                                apellido: '',
                                email: '',
                                email2: '',
                                telefono: '',
                                pais: '',
                                ciudad: '',
                                direccion: '',
                                clasificacion: '',
                                echeck:false,
                                celcheck:false,
                                regcomp:false,
                                fiscaltype:'',
                                password: '',
                                password2: ''
                            });
                        })
    
                        
                        .catch(err => console.error(err))

                        const uri2='http://localhost:4000/api/regdet'

                        fetch(uri2,{
                            method:'POST',
                            body: JSON.stringify(this.state),
                            mode:'cors',
                            headers:{
                                'Accept':'application/json',
                                'Content-Type':'application/json'
                            }
                        }).then(window.location.replace('/Login')
                        ).catch(err => console.error(err))
                    }
                e.prevenDefault()
                }

                }

                }
   
    }

    handleChange(e,text){
        const {name,value} = e.target;
        this.setState({
            [name]:value,
            clasificacion:'h1z34rft_algt_2015',
            pais:'colombia',
            echeck:false,
            celcheck:false,
            regcomp:false,
            mailcode:Math.floor(Math.random()*1000001)
        });
        console.log(e.target.value);
    }

   
    cambio = (value) => {
        console.log("Captcha value:", value);
      }

    render() {
        const recaptchaRef = React.createRef();
        function onChange(){
            const recaptchaValue = recaptchaRef.current.getValue();
            localStorage.setItem('shared', recaptchaValue)
        }
        return (
            <div>            
                <Carrusel />
                <br />
                <h2 className='bg-info'>REGISTRO DE USUARIO</h2>
                <br />

                <form onSubmit={this.agregarCliente}>

                <div className="container">
                
                <div className="mb-3 row">
                    <label for="nombre" className="col-sm-2 col-form-label"><h4>Nombre</h4></label>
                    <div className="col-sm-10">
                         <input name="nombre" onChange={this.handleChange} type="text" className="form-control" id="nombre" required />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="apellido" className="col-sm-2 col-form-label"><h4>Apellido</h4></label>
                    <div className="col-sm-10">
                         <input name="apellido" onChange={this.handleChange} type="text" className="form-control" id="apellido" required />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="Email" className="col-sm-2 col-form-label"><h4>Email</h4></label>
                    <div className="col-sm-10">
                         <input name="email" onChange={this.handleChange} type="email"  pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" className="form-control" id="Email" required />
                    </div>
                </div><div className="mb-3 row">
                    <label for="Email2" className="col-sm-2 col-form-label"><h4> verificar Email</h4></label>
                    <div className="col-sm-10">
                         <input name="email2" onChange={this.handleChange} type="email"  pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" className="form-control" id="Email2" required />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="password" className="col-sm-2 col-form-label"><h4>Password</h4></label>
                    <div className="col-sm-10">
                         <input name="password" onChange={this.handleChange} type="password" className="form-control" id="password" required />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="password2" className="col-sm-2 col-form-label"><h4>Verificar Password</h4></label>
                    <div className="col-sm-10">
                         <input name="password2" onChange={this.handleChange} type="password" className="form-control" id="password2" required />
                    </div>
                </div>
                
                <button type="submit" className="btn btn-dark">REGISTRAR</button>

                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6Le7AtwdAAAAAMZfwi_zBfQ1c5MrkCn3yyg_0IUx"
                    onChange={onChange}
                 />

                </div>
               
                </form>
                <br />
                

                <Footer />
         
            </div>
        )
    }
}
