import React from "react";
import Content from "../SearchContent/Content";
import Content_small from "../SearchContent/Content_small";
import SearchBar from "../SearchContent/SearchBar";
import Main from "./Main";
import './HomePage.css'
import CategorySlider from "./CategorySlider";

export default function HomePage(){
    return(
        <div id="homepage_container">
        <Main/>
        <span>Voir plus de cours</span>
        <Content_small/>
        <span>Que souhaitez-vous apprendre ?</span>
        <CategorySlider />
        <SearchBar/>
        </div>
    )
}