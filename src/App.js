
import './App.css';

import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Home from './Home';
import Header from './Header';
import Fotos from './Fotos';
import Videos from './Videos';
import Galeria from './Galeria';
import Enlaces from './Enlaces';

function App() {
  const [nav, setnav] = useState('bio');
  const [gallery, setgallery] = useState('');
  return (

    <div className="App">
      <Header nav={setnav} />
      <Enlaces />
      <Routes>

        <Route exact path="/" element={<Home loc={nav} />} />
        <Route exact path="/fotos" element={<Fotos gallery={setgallery} loc={nav} />} />
        <Route exact path="/videos" element={<Videos loc={nav} />} />
        <Route exact path="/galeria" element={<Galeria gallery={gallery} loc={nav} />} />

      </Routes>

    </div>
  );
}

export default App;
