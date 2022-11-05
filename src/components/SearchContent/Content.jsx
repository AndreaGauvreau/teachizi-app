import React from "react";
import { data } from "./contentData";
import './Content.css'
import { ThemeContext } from "../../App";


export default function Content(){
    return(
        <div id="teacher_slider">
        {data.map(data =>
        
            <a href={data.url}> <div id="teacherBox" style={{
                backgroundImage:`url(${data.photo})`,
                backgroundPosition:'center'
                }}>
                    
                <div id="teacher_infos">
                    <div id="teacher_name_time_price"> 
                        <span>{data.name}</span> <span>{data.price}Ft {data.time.hour}H {data.time.mins}</span>
                    </div>
                  <span id="teacher_title">{data.title}</span>
                </div>
                    
                    
            
            </div></a>)}

        </div>
    )
}