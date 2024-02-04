import React from "react"
import Table from './table';
import './font.css'

const Budget = (props) => {

    const myItems = [
        { name: 'rent 🏠', curr: 300, goal: 1200, points_page: '/budget/308190645117/rent' },
        { name: 'food 🍅', curr: 200, goal: 200, points_page: '/budget/308190645117/food' },
        { name: 'student loans 👹', curr: 3000, goal: 10000, points_page: '/budget/308190645117/loans' },
        { name: 'gas 🚗', curr: 35, goal: 50, points_page: '/budget/308190645117/gas' },
        { name: 'Colorado trip!! ⛷', curr: 18, goal: 400, points_page: '/budget/308190645117/trip' }
    ];

    return <div className="mainContainer">

        <div className={"titleContainer"}>
            <h1>Budget</h1>

        </div>

        <div className="tableContainer">
            <button className="normalButton" onClick={(e) => {
                e.preventDefault();
                // handle_auth();
            }}> Connect to My Bank </button>
            <Table items={myItems} />

            <button className="normalButton" onClick={(e) => {
                e.preventDefault();
                window.location.href = '/minime/308190645117/happy';
            }}> See My MiniMe</button>
        </div>





    </div>

}


export default Budget