import React from "react";
import './Header.css'
import '../Input.css'
import logo from './logo.png'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Header(){
    return(
        <header>
            <div>
        <Link to="/"><img src={logo}/></Link>
        <div id="input_div">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="cherchez une matière..."/>
        </div>
        </div>
        <div>
        <Link to="/cours">Trouver un cours</Link>
        <Link>Devenir Enseignant</Link>
        <Link>Inscription</Link>
        </div>
        </header>
    )
}