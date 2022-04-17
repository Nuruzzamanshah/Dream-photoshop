import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate('');

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);
    }
    const navigateRegister = event => {
        navigate('/register')
    }
    return (
        <div>
            <h2 className='text-center mt-3'>Please Login</h2>
    <div className="login-page">
            <div className="form" onSubmit={handleSubmit}>
                <form className="register-form">
                <input type="text" placeholder="name"/>
                <input type="password" placeholder="password"/>
                <input type="text" placeholder="email address"/>
                <button>create</button>
                <p className="message">Already registered? <a href="#">Sign In</a></p>
                </form>
                <form className="login-form">
                <input ref={emailRef} type="email" placeholder="Enter Your Email" required/>
                <input ref={passwordRef} type="password" placeholder="password" required/>
                <button>login</button>
                <p className="message">Not registered? <a href="#" onClick={navigateRegister}>Create an account</a></p>
                </form>
            </div>
    </div>
        </div>
    );
};

export default Login;