// SignIn Component
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ handleSignIn }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        userName: '',
        password: ''
    });

    const handleChange = (e) => {
        // Update the corresponding field in the user object in state
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const signIn = (e) => {
        e.preventDefault();
        const { userName, password } = user;

        if (userName === 'example' && password === 'password') {
            // Call the handleSignIn function passed as a prop
            handleSignIn();
            // Navigate to the home page
            navigate('/');
        } else {
            alert('Incorrect username or password. Please try again.');
        }
    };

    return (
        <div>
            <h2>Sign In</h2>
            <form onSubmit={signIn}>
                <div>
                    <label htmlFor="userName">UserName ("example")</label>
                    <input
                        type="text"
                        name="userName"
                        onChange={handleChange}
                        value={user.userName}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password ("password")</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={user.password}
                    />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
