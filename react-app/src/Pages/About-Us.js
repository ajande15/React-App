import React from "react";
import "./About-Us.css";
import "./Local.css";

function AboutUs() {
    return (
        <div className="aboutus__content" id="about">
            <div className="about_us_stuff">
            <p className="aboutus__title">About Us</p>
            <p className="about__us">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Dolor magnis quam ad aliquam habitant tellus inceptos, massa facilisis. Diam quisque nisi adipiscing egestas etiam habitant tincidunt metus. Lectus malesuada orci ultrices fermentum mollis mauris non ac. Nisi lacinia eros venenatis scelerisque diam fusce. Nascetur nascetur elit malesuada aliquam etiam etiam maximus. Leo volutpat sagittis rhoncus sollicitudin sollicitudin, posuere senectus. Hac vestibulum vitae rhoncus magna purus ultrices dapibus suscipit tempus. Tellus turpis pulvinar finibus magna dictum senectus dolor. Eros eleifend ad ipsum maecenas luctus ad. Sem iaculis ultrices aptent; massa pulvinar ipsu!
            </p>
            </div>
            <div className="about_us_image">
                <div className="image__wrapper">
                <img src="https://cdn.pixabay.com/photo/2018/07/09/17/44/baby-elephant-3526681_640.png"/>
                <div className="title__wrapper">
                <p className="image__title title">Learning Cave</p>
                <p className="image__subtitle title">This small cave is for the image statures of reading and learning <span className="exclamation-mark">!</span></p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;