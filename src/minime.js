import React from "react"

import { useNavigate } from "react-router-dom";
import Login from './login';
import "./imgs/paris.png";
import cat from './imgs/cat.png';
import './font.css'

const MiniMe = (props) => {
    const cat = require('./imgs/cat.png');

    return <>
        <div className="specialContainer">
            <h1> Mini-Me </h1>
            <div className="imgContainer">
                <img className="background" src={require('./imgs/paris.png')} />
                <img className="foreground" src={cat} />
            </div>
            <div className="flexContainer">
                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/shoppe/308190645117';
                }}> Customize</button>
                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/budget/308190645117';
                }}> See Goals </button>
                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/resources';
                }}> Resources </button>
                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/';
                }}> Home </button>
            </div>
        </div>
    </>
}


export default MiniMe