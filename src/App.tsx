import React, { useEffect, useState } from 'react'
import './styles/App.scss'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeContext } from './ThemeContext'
import Books from './components/books'

import Navbar from './components/navbar'
import About from './components/about'
import Resume from './components/resume'
import ProjectContainer from './components/project-container'
import Poetry from './components/poetry'
import Writing from './components/writing'
import Contact from './components/contact'
import WebDesignEssay from './components/essays/web-design'
import { OrnamentalLine } from './components/ornamental-line'

export const lightModeSymbol = '\u263C'
export const darkModeSymbol = '\u263E'

export const modeSymbol = (isDarkMode: boolean) => {
  return isDarkMode ? lightModeSymbol : darkModeSymbol
}

function App () {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  )

  useEffect(() => {
    // Apply dark or light mode based on the stored preference
    document.body.classList.toggle('dark-mode', isDarkMode)
    localStorage.setItem('darkMode', isDarkMode.toString())
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode)
  }

  return (
    <HashRouter>
      <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        <div className='app-container'>
          <div className='site-body'>
            <Navbar />
            <div className='w-100 pb-5 main-content'>
              <Routes>
                <Route path='/' element={<About />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/projects' element={<ProjectContainer />} />
                <Route path='/poetry' element={<Poetry />} />
                <Route path='/writing' element={<Writing />} />
                <Route path='/books' element={<Books />} />
                <Route path='/web-design' element={<WebDesignEssay />} />
              </Routes>
              <div className='contact-end'>
                <OrnamentalLine />
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    </HashRouter>
  )
}

export default App
