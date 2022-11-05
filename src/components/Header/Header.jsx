import React from "react";
import './Header.css'
import '../Input.css'
import logo from './logo.png'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from "../../App";
import Switch from "../Switch";


export default function Header({setDarkMode, darkMode}){
    const theme= React.useContext(ThemeContext)

    return(
        <header style={{background: theme.background, transition: theme.transition}}>
            <div>
        <Link to="/"><img src={logo}/></Link>
        <div id="input_div" style={{color: theme.color}}>
        <i class="fa-solid fa-magnifying-glass" style={{color: theme.color}}></i>
        <input style={{color: theme.color, border: `1px solid ${theme.color}`}} type="text" placeholder="cherchez une matière..."/>
        </div>
        </div>
        <Switch  setDarkMode={setDarkMode} darkMode={darkMode}/>
        <div>
        <Link style={{color: theme.color, borderRight: `3px solid ${theme.background1}`}} to="/cours">Trouver un cours</Link>
        <Link style={{color: theme.color}} >Devenir Enseignant</Link>
        <Link style={{color: theme.color, background:theme.background1}} >Inscription</Link>
        </div>
        </header>
    )
}