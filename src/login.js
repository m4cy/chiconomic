
import { GoogleOAuthProvider, GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from "react";


const Login = (props) => {
    const navigate = useNavigate()

    const responseOutput = (response) => {
        console.log('thissucceededyay', response.credential);
        navigate('/budget/308190645117')
    };
    const errorOutput = (error) => {
        console.log('thiserroredhereswhy', error);
    };

    return (
        <GoogleOAuthProvider clientId="157735646482-e8pi0q6r99etstfpokdvq1poq1jg9ab1.apps.googleusercontent.com">
            <div>
                <br />
                <br />
                <GoogleLogin onSuccess={responseOutput} onError={errorOutput} />
            </div>
        </GoogleOAuthProvider>

    );
}
export default Login;
