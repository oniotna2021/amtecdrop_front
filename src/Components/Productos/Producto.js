import '../Style/css/style.css';
import { Link } from 'react-router-dom';



export default function Producto(props) {

  return (
      
    <div className="col-6 col-md-4 col-lg-4" >
      <div className="product product-7 text-center">
          <figure className="product-media">
            <Link to={'/Products/'+ props.identidad}>
                <div> 
                    <img src={props.img} alt="Product" className="product-image" /> 
                </div>
                
                <div className="product-action-vertical">

                    <div className="btn-product-icon btn-quickview" title="Vista Rapida">
                    
                        <span>
                            Vista Rapida
                        </span>
                    </div>
        
                </div>
                
                <div className="product-action">
                    <a href="prueba.html" className="btn-product btn-cart"><span>Ver detalle</span></a>
                </div>
            </Link>   
          </figure>

          <div className="product-body">
              <div className="product-cat">
                  <a href="prueba.html">{props.categoria} </a>
              </div>
              <h3 className="product-title">{props.nombre}</h3>
              <div className="product-price">
                  PRECIO {props.precio}$
              </div>
              <div className="ratings-container">
                  <div className="ratings">
                      <div className="ratings-val"></div>
                      
                  </div>
                  <span className="ratings-text">PRODUCTO DE CALIDAD</span>
              </div>
          </div>
      </div>
  </div>
  )
}