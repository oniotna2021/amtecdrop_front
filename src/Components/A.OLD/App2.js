// import logo from './logo.svg';
import './App.css';

import { Routes, Route} from 'react-router-dom';

import Comprar from "../Comprar";
import Contacto from "../Contacto";
import Home from "../Home";
import logicLogin from "./Components/Login/logicLogin";
import About from "../About";
import NotFound from "../NotFound";
import Products from "../Products/Products";
import ProductWrap from "../Products/ProductWrap";
import CrearProducto from "../Products/CrearProducto";
import SpecificProduct from "../Products/SpecificProduct";
import Registrar from '../Registrar';
import Administrar from '../Administrar';
import Header from '../../templates/Header';
import EditarProducto from '../Products/EditarProducto'
import Editar from '../Editar';



function App() {
  return (
    <div className="App">

      <Header />

      <Routes>
         <Route path='/el_galpon_ciclo_4' element={<Home />}></Route>
         <Route path='/logicLogin' element={<logicLogin />}></Route>
          <Route path='/Products' element={<ProductWrap />}>
              <Route path='/Products' element={<Products />}></Route>
              <Route path='/Products/:id' element={<SpecificProduct />}></Route>
              <Route path='/Products/create' caseSensitive={false} element={<CrearProducto />}></Route>
              <Route path='/Products/edit' caseSensitive={false} element={<EditarProducto />}></Route>
          </Route>
         <Route path='/About' element={<About />}></Route>
         <Route path='*' element={<NotFound />}></Route>
         <Route path='/Contacto' element={<Contacto />}></Route>
         <Route path='/Comprar' element={<Comprar />}></Route>
         <Route path='/Registrar' element={<Registrar />}></Route>
         <Route path='/Administrar' element={<Administrar />}></Route>
         <Route path='/Editar' element={<Editar />}></Route>


       </Routes>

    </div>
  );
}

export default App;