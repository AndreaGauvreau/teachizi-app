import React from "react";
import { data } from "./contentData";
import './Content_small.css'
import { ThemeContext } from "../../App";


export default function Content_small(){
    const theme= React.useContext(ThemeContext)

    const randomNumber =()=>{
        return (Math.floor(Math.random()*3))
            }
            const randomNumber2 =()=>{
                return (Math.floor(Math.random()*3))
                    }
    return(
        <div id="teacher_slider_small">
        {data.slice(0,6).map(data =>
        
            <a href={data.url} target='_blank'> <div id="teacherBox_small" style={{transform: `rotate(${randomNumber()}deg)`}}> 
            <div style={{backgroundImage:`url(${data.photo})`,backgroundPosition:'center',transform: `rotate(${randomNumber2()}deg)`}} id="pics_small"></div>  
                <div id="teacher_infos_small">
                    <div id="teacher_name_time_price_small"> 
                        <span style={{color: theme.color}}>{data.name}</span> <span style={{color: theme.color}}>{data.price}Ft</span>
                    </div>
                  <span style={{color: theme.color}} id="teacher_title_small">{data.category}</span>
                </div>
                    
                    
            
            </div></a>)}

        </div>
    )
}