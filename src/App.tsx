import React from 'react';
import './styles/App.scss';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./components/home";
import About from './components/about';
import Poetry from './components/poetry';

function App() {
  return (
    <BrowserRouter>
    <div className="app-container">
      <div className="site-body">
        <Navbar/>
        <div>
          <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/poetry" element={<Poetry/>}/>
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
