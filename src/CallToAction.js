import React from "react";
import styles from "./CallToAction.css"

const CallToAction = () => (
<div>
    <div class="background-cta2">
        <div class="dark-overlay">
            <div id="cta" class="container-fluid">
                <h1 class="wwd display-6">Need contractor services or exterior remodeling in Denver, CO: Call RHD</h1>
                <p class="wwd-exp">Our services are available to the Denver Metro and surrounding areas, we do everything from custom decks to interlocking custom paving. Our contractors have over 100 years of experience serving the Denver, CO area and we have an A+ rating with the Better Business Bureau, so you know you can trust us to get the job done. Give us a call or schedule online today and make your dream home come true.</p>
                <hr></hr>
                <div class="button-wrapper2">
                    <button id="btn" class="home-btn"><a href="#/contact-us">CONTACT US ONLINE</a></button>
                    <button id="btn" class="home-btn"><a href="tel:7208798827">CALL: 720-879-8827</a></button>
                </div>
            </div>
        </div>
    </div>
</div>
);

export default CallToAction;