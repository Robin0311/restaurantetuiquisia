import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Container from './components/pages/Container'
import Home from './components/pages/Home';
import NoPage from './components/pages/NoPage';
import Formu from './components/pages/Formu';
import Address from './components/pages/Address';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Container/> }> 
          <Route index element={<Home />}></Route>
          <Route path='contacto' element={<Formu />}></Route>
          <Route path='direccion' element={<Address />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
