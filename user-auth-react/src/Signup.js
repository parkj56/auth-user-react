import React, { useState } from 'react';
import "./Interface.scss"
// import axios from 'axios';

const SignUp = () => {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        email: '',
    });

    // const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    }

    // const handleSignUp = () => {
    //     axios.post('http://localhost:3001/signup/',{
            
    //     })
    //     .then(response => {
    //         setMessage('You are now a user!');
    //     })
    //     .catch(error => {
    //         setMessage('Sign up failed');
    //     })
    // }

    return(
        <div className='outer-form-container'>
            <form className='form-fields'>
                <label className='label-txt'>
                    Username:
                    <input
                        type = 'text'
                        name = 'username'
                        value = {userData.username}
                        onChange = {handleChange}
                    >
                    </input>
                </label>

                <label className='label-txt'>
                    Password:
                    <input
                        type = 'text'
                        name = 'password'
                        value = {userData.password}
                        onChange = {handleChange}
                    >
                    </input>
                </label>

                <label className='label-txt'>
                    Email:
                    <input
                        type = 'text'
                        name = 'email'
                        value = {userData.email}
                        onChange = {handleChange}
                    >
                    </input>
                </label>
            </form>
            <button
                className = 'signin_bttn'
                type = 'submit'
                // onClick={handleSignUp}
            >
                Sign Up
            </button>
        </div>
    )
}

export default SignUp;