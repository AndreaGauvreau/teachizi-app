import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import React from 'react';
import {Routes, Route} from "react-router-dom"
import CourseGrid from './components/CourseGrid/CourseGrid';
import { faBlackboard } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


export const themes = {
dark : {background1:'#ffffff20',background2:'#00000020',background : '#142A3F', color: 'white',color2: 'black', transition: '0.5s'},
light: {background1:'#00000020',background2:'#ffffff20',background : '#F2F4F7', color: 'black',color2: 'white', transition: '0.5s'}}

export const ThemeContext = React.createContext(themes.light)

function App() {
  const [darkMode, setDarkMode]=useState(false)
  const theme = darkMode ? themes.light : themes.dark
  return (
    <ThemeContext.Provider value={theme}>
    <div className="App" style={{background: theme.background, transition:theme.transition}}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cours" element={<CourseGrid/>}/>
      </Routes>
      <Footer/>
    </div>
      </ThemeContext.Provider>
  );
}

export default App;
