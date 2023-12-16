import React, { useEffect, useState } from 'react';
import './styles/App.scss';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { createContext, useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Books from './components/books';


import Navbar from "./components/navbar";
import About from './components/about';
import Resume from './components/resume';
import Projects from './components/projects';
import Poetry from './components/poetry';
import Writing from './components/writing';

export const lightModeSymbol = '\u263C';
export const darkModeSymbol = '\u263E';

export const modeSymbol = (isDarkMode: boolean) => {
  return isDarkMode ? lightModeSymbol : darkModeSymbol;
};

function App() {

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    // Apply dark or light mode based on the stored preference
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // const [isDarkMode, setIsDarkMode] = useState(
  //   localStorage.getItem('darkMode') === 'true'
  // );

  // const toggleDarkMode = () => {
  //   const newMode = !isDarkMode;
  //   setIsDarkMode(newMode);
  //   localStorage.setItem('darkMode', newMode.toString());
  // };

  // useEffect(() => {
  //   // Apply dark or light mode based on the stored preference
  //   document.body.classList.toggle('dark-mode', isDarkMode);
  // }, [isDarkMode]);

  // const DarkModeContext = createContext(false);


  // // const darkMode = useContext(DarkModeContext);
  // const themeContext = useContext(ThemeContext);


  // // const [isDarkMode, setIsDarkMode] = useState(DarkModeContext);
  // // const [theme, setTheme] = useState<"light" | "dark">("light");
  // const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };


  // var modeSymbol = isDarkMode ? lightModeSymbol : darkModeSymbol;

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        {/* <ThemeContext.Provider value={{theme, setTheme}}> */}
        {/* <div className="app-container" data-theme={isDarkMode ? "dark" : "light"}> */}
        <div className="app-container">
          <div className="site-body">
            <Navbar />
            <div className='w-100 pb-5 main-content'>
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/poetry" element={<Poetry />} />
                <Route path="/writing" element={<Writing />} />
                <Route path="/books" element={<Books />} />
              </Routes>
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
