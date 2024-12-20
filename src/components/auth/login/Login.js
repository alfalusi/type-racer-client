import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from "../../../utils";
import { FetchHook } from "../../usefull/FetchHook";

import './Login.css';

const Login = () => {

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    };

    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!password || !email) {
            return handleError('All fields are required');
        }

        try {
            // const url = 'http://192.168.100.121:3001/auth/login';
            // const response = await fetch(url, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(loginInfo)
            // });
            
            const response = await FetchHook('/auth/login', 'POST', JSON.stringify(loginInfo));

            const result = await response.json();
            const { success, message, jwtToken, name, error } = result;
            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                setTimeout(() => {
                    navigate('/home');
                }, 1000);
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
        } catch(err) {
            handleError(err);
        }
    }

    return (
        <div className="login-container">
            <div className="login-form">
                <div className='row my-3 text-center'>
                    <h1>Login</h1>
                </div>
                <form onSubmit={handleLogin}>
                    <div className='form-group row my-3'>
                        <label htmlFor="email">Email: </label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="email"
                            autoFocus
                            placeholder="Enter email"
                            className='form-control my-2'
                            value={loginInfo.email}
                        />
                    </div>
                    <div className='form-group row my-3'>
                        <label htmlFor="password">Password: </label>
                        <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            autoFocus
                            placeholder="Enter password"
                            className='form-control my-2'
                            value={loginInfo.password}
                        />
                    </div>
                    <div className='row my-3 text-center'>
                        <button type='submit' className='btn btn-primary'>Login</button>
                    </div>
                    <div className='row my-3 text-center'>
                        <span>
                            Don't have an account? 
                        </span>
                    </div>
                    <div className='row my-3 text-center'>
                        <span>
                            <Link to='/signup'> <button type='submit' className='btn btn-secondary'>Sign Up</button> </Link>
                        </span>
                    </div>
                    <ToastContainer />
                </form>
            </div>
        </div>
    )
}

export default Login;