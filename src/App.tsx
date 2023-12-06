import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Sidebar from "./components/sidebar";
import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="site-body">
        <Sidebar/>
        <Routes>
          <Route path="/about" element={<Home/>}/>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
