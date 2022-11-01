import React from "react";
import './Header.css'
import '../Input.css'
import logo from './logo.png'
import { Link } from "react-router-dom";


export default function Header(){
    return(
        <header>
        <Link to="/"><img src={logo}/></Link>
        <input type="text" placeholder="cherchez une matière..."/>
        <div>
        <Link to="/cours">Trouver un cours</Link>
        <Link>Devenir Enseignant</Link>
        <Link>Inscription</Link>
        </div>
        </header>
    )
}