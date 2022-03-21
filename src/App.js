// import logo from './logo.svg';
import './App.css';

import { Routes, Route} from 'react-router-dom';

import Comprar from "./Components/Comprar";
import Contacto from "./Components/Contacto";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound";
import ProductWrap from "./Components/Products/ProductWrap";
import CrearProducto from "./Components/Products/CrearProducto";
import SpecificProduct from "./Components/Products/SpecificProduct1";
import Registrar from './Components/Registrar';
import Administrar from './Components/Administrar';
import Tienda from './Components/Productos/Tienda'
import Prueba from './Components/Productos/Prueba'
import Pagar from './Components/pago'


import EditarProducto from './Components/Products/EditarProducto'
import Editar from './Components/Editar';
import Favoritos from './Components/Favoritos'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header2 from './templates/Header2';
import Validar from './Components/motor/validar';
import Prueba2 from './templates/prueba'
import Cargar from './templates/cargar'
import Load from './templates/ploader1'
import Load2 from './templates/ploader2'

function App() {
  return (
    <div className="App">

      
      <Header2 />


      <Routes>
         <Route path='/' element={<Tienda />}></Route>
         <Route path='/login' element={<Login />}></Route>
          <Route path='/Products' element={<ProductWrap />}>
             
              <Route path='/Products/:id' element={<SpecificProduct />}></Route>
              <Route path='/Products/create' caseSensitive={false} element={<CrearProducto />}></Route>
              <Route path='/Products/edit' caseSensitive={false} element={<EditarProducto />}></Route>
          </Route>
         <Route path='*' element={<NotFound />}></Route>
         <Route path='/Contacto' element={<Contacto />}></Route>
         <Route path='/Comprar' element={<Comprar />}></Route>
         <Route path='/Registrar' element={<Registrar />}></Route>
         <Route path='/Administrar' element={<Administrar />}></Route>
         <Route path='/Editar' element={<Editar />}></Route>
         <Route path='/Favoritos' element={<Favoritos />}></Route>
         <Route path='/Validar' element={<Validar />}></Route>
         <Route path='/Tienda' element={<Tienda />}></Route>
         <Route path='/Carrito' element={<Tienda />}></Route>
         <Route path='/Prueba' element={<Prueba />}></Route>
         <Route path='/Pagar' element={<Pagar />}></Route>
         <Route path='/Prueba2' element={<Prueba2 />}></Route>
         <Route path='/cargar' element={<Cargar />}></Route>
         <Route path='/load' element={<Load />}></Route>
         <Route path='/load2' element={<Load2 />}></Route>
        
        

       </Routes>

 

    </div>
  );
}

export default App;