import React, { useSyncExternalStore } from "react";
import "./Arctic.css";
import "./Local.css";
import gboy from "../images/g-boy.png";
import { useState } from "react";

function Arctic({ setPage }) {
    const [activeLink, setActiveLink] = useState('Home');

    function scrollHome() {
        let home = document.getElementById("home");
        home.scrollIntoView({ behavior : "smooth"});
    }

    function scrollAbout() {
        let about = document.getElementById("about");
        about.scrollIntoView({ behavior : "smooth"});
    }

    function scrollHire() {
        let hire = document.getElementById("hire");
        hire.scrollIntoView({ behavior : "smooth"});
    }

    function scrollContact() {
        let contact = document.getElementById("contact");
        contact.scrollIntoView({ behavior : "smooth"});
    }

    return (
        <div>
        <div className="website__wrapper" id="home">
        <div className="header__top">
        <div className="left__header">
            <h1 className="logo">Logo</h1>
        </div>
        <div className="center__header">
            <p className={`link ${activeLink === 'Home' ? 'link__active' : ''}`} onClick={() => { scrollHome(); setActiveLink("Home"); }}>Home</p>
            <p className={`link ${activeLink === 'About' ? 'link__active' : ''}`} onClick={() => { scrollAbout(); setActiveLink("About"); }}>About Us</p>
            <p className={`link ${activeLink === 'Hire' ? 'link__active' : ''}`} onClick={() => { scrollHire(); setActiveLink("Hire"); }}>Hire Us</p>
            <p className={`link ${activeLink === 'Contact' ? 'link__active' : ''}`} onClick={() => { scrollContact(); setActiveLink("Contact"); }}>Contact Us</p>
        </div>
        <div className="right__header">
            <button className="signup__btn" onClick={() => setPage('signup')}>Signup</button>
        </div>
        </div>
        <div className="space__between"></div>
        <div className="hero__section">
            <div className="left__section">
                <p className="title">Experience</p>
                <p className="subtitle">A new way to learn <span className="exclamation">!</span></p>
                <div className="btn__wrapper">
                <button className="explore__btn">Start Journey</button>
                <button className="login__btn" onClick={() => setPage('login')}>Login</button>
                </div>
            </div>
            <div className="right__section">
                <div className="img__wrapper">
                    <img src={gboy}/>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Arctic;