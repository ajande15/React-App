import React from "react";
import "./Local.css";
import "./Hire-Us.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import arrows from "../images/arrows.png";

function HireUs() {
    return (
        <div className="hire_us_content" id="hire">
        <div className="left">
            <p className="title">Hire Us</p>
            <img src={arrows} className="arrow__img"/>
            <button className="hire__btn">Hire Us</button>
        </div>
        <div className="right">
            <p className="secondary__txt">What people are saying?</p>
            <div className="reviews">
                <div className="review">
                    <img src="https://i.pinimg.com/236x/55/c2/ca/55c2caa22e2bbfb739ee19b8385d9e58.jpg"/>
                    <p className="review__txt">
                        I had a great experience in this app! I am coming back very soon! 
                        -Amelia Grace
                    </p>
                    <div className="reviews__info">
                        <FontAwesomeIcon icon={faStar} className="star rated__star"/>
                        <FontAwesomeIcon icon={faStar} className="star rated__star"/>
                        <FontAwesomeIcon icon={faStar} className="star rated__star"/>
                        <FontAwesomeIcon icon={faStar} className="star rated__star"/>
                        <FontAwesomeIcon icon={faStar} className="star"/>
                        <p className="rate__us">Rate Us?</p>
                    </div>
                </div>
                <div className="review">
                <img src="https://i.pinimg.com/236x/2c/86/c5/2c86c52ea1c0b72275ee760b4d529850.jpg"/>
                    <p className="review__txt">
                        I like the the fast services. Everything 
                        is quick and to the point. Coming back again!
                    </p>
                    <div className="reviews__info">
                        <FontAwesomeIcon icon={faStar} className="star rated__star"/>
                        <FontAwesomeIcon icon={faStar} className="star rated__star"/>
                        <FontAwesomeIcon icon={faStar} className="star rated__star"/>
                        <FontAwesomeIcon icon={faStar} className="star rated__star"/>
                        <FontAwesomeIcon icon={faStar} className="star"/>
                        <p className="rate__us">Rate Us?</p>
                    </div>
                </div>
                <div className="review">
                <img src="https://i.pinimg.com/236x/76/de/10/76de104f6065e79281d5d7f88d0053a0.jpg"/>
                    <p className="review__txt">
                        Product is amazing! Not just for show. Very useful and use it almost everyday<span className="reveal__txt">...</span>
                        <span className="hide__txt show__txt">to help my kids improve their learning abilities.</span>
                    </p>
                    <div className="reviews__info">
                        <FontAwesomeIcon icon={faStar} className="star rated__star"/>
                        <FontAwesomeIcon icon={faStar} className="star rated__star"/>
                        <FontAwesomeIcon icon={faStar} className="star rated__star"/>
                        <FontAwesomeIcon icon={faStar} className="star rated__star"/>
                        <FontAwesomeIcon icon={faStar} className="star"/>
                        <p className="rate__us">Rate Us?</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HireUs;