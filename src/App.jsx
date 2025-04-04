  import React from 'react';
  import { Routes, Route, BrowserRouter } from 'react-router-dom';
  import Home from './pages/Home';
  import SobreNos from './pages/About'
  import Menu from './pages/Menu'
  import Delivery from './pages/Delivery'


  function App() {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/entrega" element={<Delivery />} />
        </Routes>
    );
  }

  export default App;
