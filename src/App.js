
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import Home from './Home';
import Header from './Header';
import Fotos from './Fotos';
import Videos from './Videos';
import Contactos from './Contactos'
import Galeria from './Galeria';

function App() {
const [nav, setnav] = useState('bio');
const [gallery, setgallery] = useState('');
  return (

    <div className="App">
      <Header nav={setnav} />
     
        <Routes>
          <Route exact path="/" element={<Home loc={nav}/>} />
          <Route exact path="/fotos" element={<Fotos gallery={setgallery} loc={nav}/>} />
          <Route exact path="/videos" element={<Videos loc={nav}/>} />
          <Route exact path="/contactos" element={<Contactos loc={nav}/>} />
          <Route exact path="/galeria" element={<Galeria gallery={gallery} loc={nav}/>} />

        </Routes>
      
    </div>
  );
}

export default App;
