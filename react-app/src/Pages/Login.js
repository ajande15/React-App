import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import "./Login.css";

function Login({ setPage }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLoginDetails(event) {
        event.preventDefault();
        console.log("Email: ", email, "Password: ", password);
    }

    function handleEmail(event) {
        setEmail(event.target.value); 
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    return (
        <div class="login_form_wrapper">
        <div className="login__form">
            <button onClick={() => setPage('home')} className="arrow__left">
                <FontAwesomeIcon icon={faArrowLeft}/>
            </button>
            <h1 className="login__title">Login</h1>
            <p className="subtitle">Welcome Back</p>
            <div className="btn__wrapper">
                <button>Google</button>
                <button>Facebook</button>
            </div>
            <div className="line"><p className="with__email">with email</p></div>
            <form onSubmit={handleLoginDetails} className="input__wrapper">
                <div className="input">
                    <FontAwesomeIcon className="login__icon" icon={faEnvelope}/>
                    <input 
                        type="email" 
                        value={email} 
                        placeholder="Email" 
                        onChange={handleEmail} 
                    />
                </div>
                <div className="input">
                    <FontAwesomeIcon className="login__icon" icon={faLock}/>
                    <input 
                        type="password" 
                        value={password} 
                        placeholder="Password" 
                        onChange={handlePassword} 
                    />
                </div>
                <button type="submit" className="login__btn">Login</button>
            </form>
            <div className="forgot_pass_wrapper">
                <div className="rememberme__box">
                    <input type="checkbox" className="box"/>
                    <p>Remember me?</p>
                </div>
                <p className="forgot__password">Forgot Password?</p>
            </div>
            <p className="dont_have_an_account">Don't have an account? <span className="create__account">Create Account</span></p>
        </div>
        </div>
    )
}

export default Login;
