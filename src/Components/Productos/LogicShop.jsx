import { useEffect, useState } from 'react';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';
import Producto from './Producto';


import axios from 'axios';
import FiltroWrapper from './FiltroWrapper';

export default function LogicShop() {



    //trae productos y los filtra para paginacion
    const [paginaActual, setPaginaActual] = useState(1);
    const [productos, setProductos]=useState([]);
    const [tablaProductos, setTablaProductos]= useState([]);
    
    const filtrar=(terminoBusqueda)=>{
      var resultadosBusqueda=tablaProductos.filter((elemento)=>{
        if(elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        ){
          return elemento;
        }
      });
      setProductos(resultadosBusqueda);
    }

    //fin filtro por palabra


    const TOTAL_POR_PAGINA = 6;

    useEffect(()=>{
        buscarProductos();
    }, []); 
  
      const buscarProductos=()=>{
      let url='http://localhost:4000/api/producto';
      axios.get(url)
      .then(res => {
        setProductos(res.data)
        setTablaProductos(res.data)
      })
      .catch((error) => {
        console.log(error); 
      });   
    }  
  
    const getTotalPaginas = () => {
      let cantidadTotalDeProductos = productos.length;
      return Math.ceil(cantidadTotalDeProductos / TOTAL_POR_PAGINA);
    }
  
    let productPagina= productos.slice(
        (paginaActual - 1) * TOTAL_POR_PAGINA,
        paginaActual * TOTAL_POR_PAGINA
    );

    // 

  
    return (
      <PageWrapper>

                    <div className="col-lg-9">
                			<div className="toolbox">
                				<div className="toolbox-right">
                					{/* <div className="toolbox-sort">
                						<label htmlFor="sortby">Ordenar por:</label>
                						<div className="select-custom">
                                <select name="sortby" id="sortby" className="form-control">
                                  <option value="popularity" >Mas Popular</option>
                                  <option value="rating">Mejor Calificado</option>
                                  <option value="date">Fecha</option>
                                </select>
										        </div>
                					</div> */}
                				</div>
                			</div>

                      <div className="products mb-3">
                          <div className="row justify-content-center">

                          {productPagina.map(producto =>
                            <Producto key={producto._id} identidad={producto._id} nombre={producto.nombre} categoria={producto.categoria}
                              precio={producto.precio_venta} 
                              img={producto.imagen}>
                              {producto.detalle}
                            </Producto>
                          )} 
                    
                          <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
                            setPaginaActual(pagina)
                          }} />

                          </div>
                      </div>

                		</div>
  
                          <FiltroWrapper onChange={(word) => {
                              filtrar(word);
                          }}/>
  
      </PageWrapper>
    );
  }