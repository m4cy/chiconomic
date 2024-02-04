import React from "react"
import Table from './table';
import axios from 'axios';
import './font.css'

const Budget = (props) => {

    const myItems = [
        { name: 'rent 🏠', curr: 300, goal: 1200, points_page: '/budget/308190645117/rent' },
        { name: 'food 🍅', curr: 200, goal: 200, points_page: '/budget/308190645117/food' },
        { name: 'student loans 👹', curr: 3000, goal: 10000, points_page: '/budget/308190645117/loans' },
        { name: 'gas 🚗', curr: 35, goal: 50, points_page: '/budget/308190645117/gas' },
        { name: 'Colorado trip!! ⛷', curr: 18, goal: 400, points_page: '/budget/308190645117/trip' }
    ];

    const tokenEndpoint = 'https://api-sandbox.capitalone.com/oauth2/token';  // Replace with the actual token endpoint
    const clientId = 'caac948376436cbf28f86e614ce0d4ff';
    const clientSecret = '063c320db593cfacd0030c37a339cbf1';

    // Encode client credentials in Base64
    const credentialsBase64 = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    const requestBody = {
        grant_type: 'client_credentials',
        // Other required parameters based on the authentication server's specifications
    };

    // const handle_auth(() => {
    //     console.log('hi')
    //     // Make a POST request to the token endpoint with client credentials
    //     axios.post(tokenEndpoint, requestBody, {
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded',
    //             'Authorization': `Basic ${credentialsBase64}`,
    //         },
    //     })
    //         .then((response) => {
    //             const token = response.data.access_token;
    //             console.log('Bearer Token:', token);

    //             // Now you can use the token for your authenticated requests
    //             // For example, set the token in the Authorization header for subsequent requests
    //             axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    //             axios.get()
    //         })
    //         .catch((error) => {
    //             console.error('Error obtaining Bearer token:', error.response ? error.response.data : error.message);
    //         });
    // })

    return <div className="mainContainer">

        <div className={"titleContainer"}>
            <h1>Budget</h1>

        </div>

        <div className="tableContainer">
            <button onClick={(e) => {
                e.preventDefault();
                // handle_auth();
            }}> Auth with my Bank </button>
            <Table items={myItems} />

            <button onClick={(e) => {
                e.preventDefault();
                window.location.href = '/minime/308190645117/happy';
            }}> See my MiniMe</button>
        </div>





    </div>

}


export default Budget