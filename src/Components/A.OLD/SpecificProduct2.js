import React from 'react'
import { useParams } from 'react-router'
import {useEffect, useState} from 'react';
import axios from "axios";

import '../Style/css/bootstrap.min.css';
import '../Style/css/style.css';

export default function SpecificProduct() {


  let {id} = useParams();

  const [producto, setProducto]= useState([]);

  const peticionProductGet=async()=>{
    await axios.get('https://backend-galpon-c4.herokuapp.com/api/producto/'+id)
    .then(response=>{
      setProducto(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    peticionProductGet();
  })


  return (
      <div>
         <h1>{producto.nombre}</h1>
         <h1>{producto.precio_venta}</h1>
         <h1>{producto.detalle}</h1>
       
      </div>
  )

}
