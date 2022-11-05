import React from "react";
import Content from "../SearchContent/Content";
import Content_small from "../SearchContent/Content_small";
import SearchBar from "../SearchContent/SearchBar";
import Main from "./Main";
import './HomePage.css'
import CategorySlider from "./CategorySlider";
import CalculMoney from "./CalculMoney";
import { useContext } from "react";
import { ThemeContext } from "../../App";

export default function HomePage({darkMode, setDarkMode}){
    const theme= useContext(ThemeContext)
    return(
        <div id="homepage_container">
        <Main/>
            <span style={{color: theme.color}}>Voir plus de cours</span>
        <Content_small/>
            <div id="calcul_section" style={{color: theme.color}}>
            <section>
                <h1>Notre mission</h1>
                <span>
Notre objectif est le développement du secteur hongrois de l'éducation et de l'enseignement privé.

Nous travaillons sur une plateforme qui aide les enseignants dans leur travail, facilite leur quotidien et les aide à avoir une base étudiante permanente.

Notre objectif est de créer une communauté interactive d'enseignants, où chacun peut librement partager ses pratiques, son expérience et ses connaissances.</span>
            </section>
            <section>
                <CalculMoney/>
            </section>
            </div>
             <span style={{color: theme.color}}>Que souhaitez-vous apprendre ?</span>
        <CategorySlider />
        <SearchBar/>
        </div>
    )
}