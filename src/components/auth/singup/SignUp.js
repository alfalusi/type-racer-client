import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from "../../../utils";

const SignUp = () => {

    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const copySignupInfo = { ...signupInfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    };

    const navigate = useNavigate();
    const handleSignup = async (e) => {
        e.preventDefault();
        const {name, email, password} = signupInfo;
        if (!name || !email || !password) {
            return handleError('All fields are required');
        }

        try {
            const url = 'http://localhost:3001/auth/signup';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });

            const result = await response.json();
            const { success, message, error } = result;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login');
                }, 20000);
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
        <div className="container">
            <div className='row my-3 text-center'>
                <h1>Sign Up</h1>
            </div>
            <form onSubmit={handleSignup}>
                <div className='form-group row my-3'>
                    <label htmlFor="name">Name: </label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        autoFocus
                        placeholder="Enter name"
                        className='form-control'
                        value={signupInfo.name}
                    />
                </div>
                <div className='form-group row my-3'>
                    <label htmlFor="email">Email: </label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="email"
                        autoFocus
                        placeholder="Enter email"
                        className='form-control'
                        value={signupInfo.email}
                    />
                </div>
                <div className='form-group row my-3'>
                    <label htmlFor="password">Password: </label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="password"
                        autoFocus
                        placeholder="Enter password"
                        className='form-control'
                        value={signupInfo.password}
                    />
                </div>
                <div className='row my-3 text-center'>
                    <button type='submit' className='btn btn-primary'>Sign Up</button>
                </div>
                <div className='row my-3 text-center'>
                    <span>
                        Already have an accout?
                    </span>
                </div>
                <div className='row my-3 text-center'>
                    <span>
                        <Link to='/login'> <button type='submit' className='btn btn-secondary'>Login</button> </Link>
                    </span>
                </div>
                <ToastContainer />
            </form>
        </div>
    )

}

export default SignUp;