
import React from 'react';
import { createContext } from 'react';


export const DarkModeContext = React.createContext({
    isDarkMode: false,
    setIsDarkMode: (toggle: boolean) => { }
  });