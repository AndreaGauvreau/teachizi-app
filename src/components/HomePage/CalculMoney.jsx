import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState, useReducer } from 'react'
import './CalculMoney.css'
import { ThemeContext } from "../../App";


const reducer=(a,b)=>{
    return b
}

export default function CalculMoney() {
    const theme= React.useContext(ThemeContext)

    const [state, dispatch]= useReducer(reducer,{hour:1, price:30, total:30})
    const hourRef= useRef()
    const priceRef= useRef()


    const handlChangeHour=()=>{
        dispatch({hour:hourRef.current.value})
        dispatch({total:hourRef.current.value*priceRef.current.value})

    }
    const handlChangePrice=()=>{
        dispatch({price:priceRef.current.value})
        dispatch({total:hourRef.current.value*priceRef.current.value})
    }




  return (
        <div id='calculate_price_potential' style={{background: theme.color, color: theme.color2 }}>
    <div>Calculez combien vous pouvez gagner en donnant des cours sur teachizi !</div>
    <div id='input_container'>
        <label>Heure/semaine
        <input id="input_hour" type="number" ref={hourRef} value={state.hour}  onChange={()=>handlChangeHour()}/> 
        </label>   
        <label>Prix pour 1 heure   
        <input type="number" ref={priceRef} value={state.price} onChange={()=>handlChangePrice()} step='1'/>
        </label> 
    </div>
        <h2>Vous pouvez gagner ~ {state.total}€</h2>
        </div>
  )
}
