import React from "react";
import { data } from "./contentData";
import './Content_small.css'

export default function Content_small(){
    return(
        <div id="teacher_slider_small">
        {data.slice(0,6).map(data =>
        
            <a href={data.url} target='_blank'> <div id="teacherBox_small"> 
            <div style={{backgroundImage:`url(${data.photo})`,backgroundPosition:'center'}} id="pics_small"></div>  
                <div id="teacher_infos_small">
                    <div id="teacher_name_time_price_small"> 
                        <span>{data.name}</span> <span>{data.price}Ft</span>
                    </div>
                  <span id="teacher_title_small">{data.category}</span>
                </div>
                    
                    
            
            </div></a>)}

        </div>
    )
}