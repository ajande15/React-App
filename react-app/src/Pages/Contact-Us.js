import React from "react";
import "./Local.css";
import "./Contact-Us.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faHouse } from '@fortawesome/free-solid-svg-icons';

function ContactUs() {
    return (
    <div className="contact_us_wrapper" id="contact">
    <h1 className="contact__title">Contact Us</h1>
    <div className="contact__us">
        <div className="info">
        <div className="contact__info">
            <input type="text" placeholder="Name" className="input inputT"/>
            <input type="email" placeholder="Email" className="input inputT"/>
            <textarea placeholder="Send Email" rows="10" className="send-email input"/>
            <button className="send">Send</button>
        </div>
        </div>
        <div className="contact__details">
            <p className="title__details">Contact Info</p>
            <div className="details__wrapper">
            <div className="detail__wrapper">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <p className="info__txt">Email</p>
            </div>
            <div className="detail__wrapper">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <p className="info__txt">+1 3189559705</p>
            </div>
            <div className="detail__wrapper">
            <FontAwesomeIcon icon={faHouse} className="icon" />
            <p className="info__txt">Malibu, 1287 Park Mavbel</p>
            </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default ContactUs;