import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div>
            <h2 className='text-center mt-3'>Please Login</h2>
    <div class="login-page">
            <div class="form">
                <form class="register-form">
                <input type="text" placeholder="name"/>
                <input type="password" placeholder="password"/>
                <input type="text" placeholder="email address"/>
                <button>create</button>
                <p class="message">Already registered? <a href="#">Sign In</a></p>
                </form>
                <form class="login-form">
                <input type="email" placeholder="Enter Your Email"/>
                <input type="password" placeholder="password"/>
                <button>login</button>
                <p class="message">Not registered? <a href="#">Create an account</a></p>
                </form>
            </div>
    </div>
        </div>
    );
};

export default Login;