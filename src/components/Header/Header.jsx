import React from "react";
import './Header.css'
import '../Input.css'
import logo from './logo.png'


export default function Header(){
    return(
        <header>
        <img src={logo}/>
        <input type="text" placeholder="cherchez une matière..."/>
        <div>
            <button>Tanóra keresése</button>
            <button>Legyél tanár</button>
            <button>Regisztráció</button>
        </div>
        </header>
    )
}