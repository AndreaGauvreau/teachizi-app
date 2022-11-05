import React from "react";
import './Main.css'
import hiboux from './hiboux.png'
import { Link } from "react-router-dom";
import { ThemeContext } from "../../App";


export default function Main(){
    const theme= React.useContext(ThemeContext)

    return(
        <main>
            <div className="left_main">
                <h1 style={{color: theme.color}}>Trouvez le professeur parfait</h1>
                <ul style={{color: theme.color}}>
                    <li>Réservation rapide</li>
                    <li>Professeurs vérifiés</li>
                    <li>Un équipe derrière vous !</li>
                </ul>
                <Link to="/cours"><button style={{background: theme.color, color: theme.color2 }}>Trouver un cours</button></Link>
            </div>
            <div className="right_main">
          <img src={hiboux}/>
            </div>
        </main>
    )
}