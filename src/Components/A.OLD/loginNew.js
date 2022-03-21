import React, { Component } from 'react'

export default class loginNew extends Component {
    constructor() {
        super();
        this.state={
            email: '',
            password: '',              
            };
           
            this.handleChange = this.handleChange.bind(this);
           
            this.loginCliente = this.loginCliente.bind(this);
            // this.componentDidMount = this.componentDidMount.bind(this)
    }

    // componentDidMount(){
    //     this.loginCliente();
    // }

    handleChange(e){
      const {name,value} = e.target;      
      this.setState({
          [name]:value
      });
      console.log(e.target.value);
    
  }

    loginCliente(){
      const url='http://localhost:4000/api/login/';
      fetch(url,{
        method:'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'aplication/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res =>res.json())
        .then(data =>{
          localStorage.setItem('token', data.token)
          console.log(data.token);
        })

    }

     
    render() {
        return (
            <div>
                <div class="home container">
   <h2 class="text-center bg-secondary fw-bold super-container text-white mt-3">INICIO DE SESION</h2>
   <h3 class="text-center fw-bold super-container mt-3">Introduce tu correo y contraseña</h3>
   
   
   <form onSubmit={()=> this.loginCliente(this.state.email,this.state.password) }>
                <div className="container">
                
                <div class="mb-3 row">
                    <label for="nombre" class="col-sm-2 col-form-label">Correo</label>
                    <div class="col-sm-10">
                         <input name="email" onChange={this.handleChange} type="email" class="form-control" id="email" required/>
                         
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="password" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                         <input name="password" onChange={this.handleChange} type="password" class="form-control" id="password" />
                     </div>
                </div>
               
                <button type="submit" className="btn btn-dark">ACTUALIZAR</button>
               
          
                </div>
                </form>
   
   
 
  </div>
            </div>
        )
    }
}
