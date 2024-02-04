import React from "react"

import { useNavigate } from "react-router-dom";
import Login from './login';
import './imgs/chiconomic.png'
window.Buffer = window.Buffer || require("buffer").Buffer;


const Home = () => {

    return <div className="mainContainer">

        <div>
            <div>
                <img className="title" src={require('./imgs/chiconomic.png')} />
            </div>

            <Login />

        </div>





    </div>

}


export default Home