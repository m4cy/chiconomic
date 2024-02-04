import React from "react"

import './font.css'


const Closet = () => {
    const cat = require('./imgs/cat.png');
    const glasses = require('./imgs/glasses.png');
    const paris = require('./imgs/paris.png');
    const apt = require('./imgs/bachelorpad.jpg');


    const products = [
        { name: 'Pink Corvette', img: cat, price: 32000 },
        { name: 'Heart Sunglasses', img: glasses, price: 20 },
        { name: 'Trip to Paris', img: paris, price: 4000 },
        { name: 'Single Room Apt', img: apt, price: 1000 }
    ]


    return <>
        <div className="specialContainer">
            <h1> Shoppe </h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <div className="productContainer">
                            <img className="closetImage" src={product.img} />
                        </div>

                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    </>

}


export default Closet