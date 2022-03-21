//import './App.css';
import {useEffect, useState} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LogicaLogin() {

  

  const [usuarios, setUsuarios]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [pass, setPass]= useState("");

const peticionGet=async()=>{
  await axios.get("https://backend-galpon-c4.herokuapp.com/api/cliente")
  .then(response=>{
    setUsuarios(response.data);
    setTablaUsuarios(response.data);
  }).catch(error=>{
    console.log(error);
  })
}


const onChangeEmail=(evento)=>{
  //debugger;
  //alert(evento.target.value);
  filtrar(evento.target.value);
}

const onChangePassword=(evento)=>{
  //debugger;
  //alert(evento.target.value);
  setPass(evento.target.value);
}

const filtrar=(terminoBusqueda)=>{
  var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
    if(elemento.email.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    ){
      return elemento;
    }
  });
  setUsuarios(resultadosBusqueda);
}


const onClicLogin=()=>{
  alert('Funciono')
  alert(pass)
  
  console.log(usuarios)
  usuarios.filter((elemento)=>{
    if(elemento.password.toString()===pass
    ){
      alert('correcto')
        localStorage.setItem('loggin', true)
        window.location.reload();
    }else{
      alert('incorrecto')
    }
  });
  
} 


useEffect(()=>{
peticionGet();
},[])

  return (
    <div >
      {/* inicio formulario */}
      <form>
          <div className="form-group">
            <label for="inputEmail1">Correo</label>
            <input 
                type="email" 
                className="form-control" 
                id="inputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter email" 
                //value={busqueda}
                onChange={onChangeEmail}/>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder="Password"
                onChange={onChangePassword}
                />
          </div>
          <button 
              type="button" 
              className="btn btn-primary"
              onClick={onClicLogin}>
                  Ingresar
          </button>
      </form>
      {/* fin formulario */}
      

     <div className="table-responsive">
       <table className="table table-sm table-bordered">
         <thead>
           <tr>
             <th>Nombre</th>
             <th>Apellido</th>
             <th>correo</th>
             <th>telefono</th>
             <th>pais</th>
             <th>Ciudad</th>
             <th>password</th>
           </tr>
         </thead>

         <tbody>
           {usuarios && 
           usuarios.map((usuario)=>(
             <tr key={usuario.id}>
               <td>{usuario.nombre}</td>
               <td>{usuario.apelllido}</td>
               <td>{usuario.email}</td>
               <td>{usuario.telefono}</td>
               <td>{usuario.pais}</td>
               <td>{usuario.ciudad}</td>
               <td>{usuario.password}</td> 
             </tr>
           ))}
         </tbody>

       </table>
     </div> 
    </div>
  );
}
