import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () =>{
        navigate('/login');
    }
    const handleRegister = event =>{
        event.preventDefault();
        console.log(event.target);
    }
    return (
        <div>
            <h3 className='text-center mt-3'>Please Register</h3>
            <div className="login-page">
            <div className="form" onSubmit={handleRegister}>
                <form className="register-form">
                <input type="text" placeholder="name"/>
                <input type="password" placeholder="password"/>
                <input type="text" placeholder="email address"/>
                <button>create</button>
                <p className="message">Already registered? <a href="#">Sign In</a></p>
                </form>
                <form className="login-form">
                <input  type="text" placeholder="Enter Your Name" required/>
                <input  type="email" placeholder="Enter Your Email" required/>
                <input  type="password" placeholder="password" required/>
                <button>submit</button>
                <p className="message">Already have An Account? <a href="login" onClick={navigateLogin}>Please Login</a></p>
                </form>
            </div>
    </div>
        </div>
    );
};

export default Register;