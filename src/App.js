
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import Home from './Home';
import Header from './Header';
import Fotos from './Fotos';
import Videos from './Videos'

function App() {

  return (

    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
