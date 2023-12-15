import React, { useState } from 'react';
import './styles/App.scss';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { createContext, useContext } from 'react';
import { DarkModeContext } from './context';


import Navbar from "./components/navbar";
import About from './components/about';
import Resume from './components/resume';
import Projects from './components/projects';
import Poetry from './components/poetry';

export const lightModeSymbol = '\u263C';
export const darkModeSymbol = '\u263E';

export const modeSymbol = (isDarkMode: boolean) => {
  return isDarkMode ? lightModeSymbol : darkModeSymbol;
};

function App() {

  // const DarkModeContext = createContext(false);
  const darkMode = useContext(DarkModeContext);


  const [isDarkMode, setIsDarkMode] = useState(false);

  var modeSymbol = isDarkMode ? lightModeSymbol : darkModeSymbol;

  return (
    <BrowserRouter>
      <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
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
      </DarkModeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
