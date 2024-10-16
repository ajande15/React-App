import React, { useState } from "react";
import "./Signup.css";

function Signup({ setPage }) {
    return (
        <div className="signup_form_wrapper">
            <div className="signup__form">
                <p className="signup__title">Signup</p>
                <button className="google__btn">Signup with Google</button>
                <div className="line"><p>or</p></div>
                <div className="signup__inputs">
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/> 
                <input type="password" placeholder="Repeat Password"/> 
                </div>
                <button className="signup__btn">Signup</button>
                <p className="alreadygotacc">Already have an account? <span className="signin__txt">Signin</span></p>
            </div>
        </div>
    )
}

export default Signup;