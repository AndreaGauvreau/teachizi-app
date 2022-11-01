import React from "react";
import './Main.css'
import hiboux from './hiboux.png'

export default function Main(){
    return(
        <main>
            <div className="left_main">
                <h1>Találd meg a Neked való Tanárt</h1>
                <ul>
                    <li>Gyors foglalás</li>
                    <li>Egyszerű kapcsolattartás</li>
                    <li>Ellenőrzött tanárok</li>
                </ul>
                <button>Tanóra keresése</button>
            </div>
            <div className="right_main">
          <img src={hiboux}/>
            </div>
        </main>
    )
}