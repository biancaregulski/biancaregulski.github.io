import React from 'react';
import './styles/App.scss';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Navbar from "./components/navbar";
import About from './components/about';
import Resume from './components/resume';
import Projects from './components/projects';
import Poetry from './components/poetry';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="site-body">
          <Navbar />
          <div className='w-100 pb-5 main-content'>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/poetry" element={<Poetry />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
