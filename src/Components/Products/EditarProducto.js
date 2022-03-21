import React, { Component } from 'react'

export default class EditarProducto extends Component {
    constructor() {
        super();
        this.state={
          productId:'',
          nombre: '',    
          unidades: '',
          precio_compra:'',
          precio_venta:'',
          detalle:'',
          categoria:'',
          imagen:'',
          __v:'',
          productos:[],
          productocarga:[],
          _id:''
          };

            this.eliminarProducto = this.eliminarProducto.bind(this)
            this.fetchProductos = this.fetchProductos.bind(this)
            this.llamarProducto = this.llamarProducto.bind(this) 
            this.handleChange = this.handleChange.bind(this)
           
    }

    componentDidMount(){
        this.fetchProductos();
    }

    handleChange(e){
      const {name,value} = e.target;      
      this.setState({
          [name]:value,
          productId: this.state.productocarga.productId,
          nombre: this.state.productocarga.nombre,    
          detalle:this.state.productocarga.detalle,
          categoria:this.state.productocarga.categoria,
          imagen:this.state.productocarga.imagen,
          __v:this.state.productocarga.__v,

      });
      console.log(e.target.value);
    
  }


fetchProductos(){
        fetch('http://localhost:4000/api/producto/',{
          METHOD: 'GET',
          headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({productos: data});
            console.log(this.state.productos);

        });
        }

llamarProducto(id){
          const url='http://localhost:4000/api/producto/'+id;
          console.log(url);
          fetch(url,{
            METHOD: 'GET',
            headers: {
              'Accept': 'aplication/json',
              'Content-Type': 'application/json'
            }
          })
          .then(res => res.json())
            .then(data => {
              this.setState({productocarga: data})
              console.log(this.productocarga);
            
            });
           
        }

  eliminarProducto(id){
      // eslint-disable-next-line no-restricted-globals
      if (confirm('Desea borrar este producto ?')){
       
       // https://backend-galpon-c4.herokuapp.com/api/producto/
        console.log('Eliminando',id);
        let url='http://localhost:4000/api/producto/'+id;
        console.log(url);
        fetch(url,{
          method: 'DELETE',
          mode:'cors',
          headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.fetchProductos();
        });

    }
  }

  editarProducto(id){
    const url='http://localhost:4000/api/producto/'+id;
    console.log(url)
    console.log(this.state)
    fetch(url,{
      method:'PUT',
      body: JSON.stringify(this.state),
      mode:'cors',
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
      }
  }).then(res => res.json())
  .then(data => {
      console.log(data);
      this.setState({    
        unidades: '',
        precio_compra:'',
        precio_venta:''
      });
  })
  .then( alert('Producto actualizado'))
  .catch(err => console.error(err))
  
  

  // console.log(this.state);
}




    render() {
        return (
            <div>
                <div class="home container">
   <h2 class="text-center bg-secondary fw-bold super-container text-white mt-3">PANEL ADMINISTRATIVO</h2>
   <h3 class="text-center fw-bold super-container mt-3">Actualizar unidades, precio de compra y venta</h3>
   
   
   
   <form onSubmit={()=> this.editarProducto(this.state.productocarga._id)} class="needs-validation" >
                                <div class="row g-3">
                                    <div class="col-sm-6">
                                        <label for="unidades" class="form-label">Unidades</label>
                                        <input placeholder={this.state.productocarga.unidades} name="unidades" onChange={this.handleChange} type="text" class="form-control" id="unidades" required/>
                                    </div>
                                    <div class="col-6">
                                        <label for="precio_compra" class="form-label">Precio de Compra </label>
                                        <input placeholder={this.state.productocarga.precio_compra} name="precio_compra" onChange={this.handleChange} type="text" class="form-control" id="precio_compra" required/>
                                     </div>
                                    <div class="col-6">
                                        <label for="precio_venta" class="form-label">Precio de Venta</label>
                                        <input placeholder={this.state.productocarga.precio_venta} name="precio_venta" onChange={this.handleChange} type="text" class="form-control" id="precio_venta" required/>
                                    </div>
                                   
                                </div>
                                <hr class="my-4" />
                                <button type="submit" className="btn btn-dark">ACTUALIZAR</button>
                                <hr class="my-4" />
                            </form>
   
   
   
   <table class="table">
            <thead class="bg--sucess">
              <tr>
                <th scope="col mg-2">Nombre del producto</th>
                <th scope="col">cantidad</th>
                <th scope="col">Precio compra</th>
                <th scope="col">Precio venta</th>
                <th scope="col">Accion</th>
                
              </tr>
            </thead>
    </table>

    {
  this.state.productos.map(producto => {
        return(
            <table class="table">
            <tbody>
              <tr key={producto._id}>
                <td className="col-md-4">{producto.nombre} </td>
                <td className="col-md-1">{producto.unidades} </td>
                <td className="col-md-3">{producto.precio_compra} </td>
                <td>{producto.precio_venta}</td>
                <td className="col-md-1">
                <button className="btn btn-success" onClick={()=> this.llamarProducto(producto._id) }>Editar</button>
                <button className="btn btn-danger" onClick={()=> this.eliminarProducto(producto._id) }>Eliminar</button>
                </td>
                
              </tr>
              </tbody>
          </table>
        )
  })
  
  }
 
  </div>
            </div>
        )
    }
}
