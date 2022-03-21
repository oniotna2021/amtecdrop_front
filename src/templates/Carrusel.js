import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'


export default class Carrusel extends Component {
    render() {
        return (
            <div>
               <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://solucionesamtec.com.co/imagenes/drop/bateria.jpg"
      alt="teclados en soluciones AMTEC"
    />
    <Carousel.Caption>
      <h3 className='tw'>BATERIAS</h3>
      <p className='tw'>Mejora los tiempos de trabajo sin conexion al cargador</p>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://solucionesamtec.com.co/imagenes/drop/teclado.jpg"
      alt="baterias en soluciones AMTEC"
    />

    <Carousel.Caption>
      <h3>TECLADOS</h3>
      <p>Tenemos una amplia variedad de teclados de todas las marcas</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://solucionesamtec.com.co/imagenes/drop/cargadores.jpg"
      alt="cargadores en soluciones AMTEC"
    />

    <Carousel.Caption>
      <h3>CARGADORES</h3>
      <p>Retoma la potencia de tu equipo con los cargadores de solucionesAMTEC</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
}
