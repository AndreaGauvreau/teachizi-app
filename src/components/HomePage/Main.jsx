import React from "react";
import './Main.css'
import hiboux from './hiboux.png'
import { Link } from "react-router-dom";

export default function Main(){
    return(
        <main>
            <div className="left_main">
                <h1>Trouvez le professeur parfait</h1>
                <ul>
                    <li>Réservation rapide</li>
                    <li>Professeurs vérifiés</li>
                    <li>Un équipe derrière vous !</li>
                </ul>
                <Link to="/cours"><button>Trouver un cours</button></Link>
            </div>
            <div className="right_main">
          <img src={hiboux}/>
            </div>
        </main>
    )
}