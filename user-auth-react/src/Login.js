import React, { useState } from 'react';
import "./Login.scss"

const Signin = () => {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        email: '',
    })

    const handleSubmit = (event) => {
        const {name, value} = event.target;
        setUserData({userData, [name]: value});

    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserData({userData, [name]: value});
    };

    return(
        <div className='outer-form-container'>
            <form>
                <br />
                <label className='label-txt'>
                    Username:
                    <input
                        type= "text"
                        name = "username"
                        value = {userData.username}
                        onChange = {handleChange}
                    />
                </label>
            </form>
            
            <form>
                <label className='label-txt'>
                    Password: 
                    <input
                        type = "text"
                        name = "password"
                        value = {userData.password}
                        onChange = {handleChange}
                    />
                </label>
            </form>

            <br />

            <button 
                className='signin_bttn'
                type = "submit"
                onClick = {handleSubmit}
            >
                Sign In
            </button>
        </div>
    );

};

export default Signin;