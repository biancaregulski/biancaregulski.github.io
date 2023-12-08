import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="site-body">
        <Navbar/>
        <div>
          <Routes>
            <Route path="/about" element={<Home/>}/>
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
