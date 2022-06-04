import React from "react";
import styles from "./OutdoorLiving.css";
import CallToAction from "./CallToAction";

const OutdoorLiving = () => (
<div>
    <div class="r-wrap">
        <div id="roof-banner" class="roof-banner">
            <h2 class="roof-header">Roofing</h2>
        </div>
        <div class="roof-wrapper">
            <img id="roofing-img" class="roof-img" src="/roofing.jpg" />
            <div class="roof-div">
                <h3 class="ext-rem-head roof-head">Commercial and Residential Roofing</h3>
                <p class="roof-p">We offer commercial and residential roofing services. To maximize our flexibility we have many different materials for you to choose from when re-roofing your home. Materials include Shingles, Shake, Tile, Metal, Slate, Flat/Low Slope. Call today to get your project started!</p>
            </div>
        </div>
    </div>
    <div class="s-wrap">
        <div id="siding-banner" class="roof-banner">
            <h2 class="roof-header">Siding</h2>
        </div>
        <div class="roof-wrapper">
            <img id="siding-img" class="roof-img" src="/siding.jpg" />
            <div class="roof-div">
                <h3 class="ext-rem-head roof-head">Siding Replacement and Installation</h3>
                <p class="roof-p">We offer siding replacement and installation using high quality materials that can stand up to the weather. Siding is one of the most important first lines of defense for your house, so if you have siding damage it's important to get this fixed as soon as possible to prevent permanent damage to your home.</p>
            </div>
        </div>
    </div>
    <div class="g-wrap">
        <div id="gutter-banner" class="roof-banner">
            <h2 class="roof-header">Gutters</h2>
        </div>
        <div class="roof-wrapper">
            <img id="gutter-img" class="roof-img" src="/gutter.jpg" />
            <div class="roof-div">
                <h3 class="ext-rem-head roof-head">Gutter Replacement and Installation</h3>
                <p id="gutter-exp" class="roof-p">The gutters on your house redirect water from your roof to the natural groundwater system, this prevents standing water from causing permanent damage. We can replace damaged gutters with high quality brand new gutters that will sufficiently protect your home.</p>
            </div>
        </div>
    </div>
    <div class="g-wrap">
        <div id="gutter-banner" class="roof-banner">
            <h2 class="roof-header">Windows</h2>
        </div>
        <div class="roof-wrapper">
            <img id="gutter-img" class="roof-img" src="/window.jpg" />
            <div class="roof-div">
                <h3 class="ext-rem-head roof-head">Window Installation</h3>
                <p id="gutter-exp" class="roof-p">We can replace your old windows with new windows that will look great in your home, whether it be double-hung windows or a glass slider we can get it installed and looking great in no time. Windows are a great way to add natural light and make your home unique.</p>
            </div>
        </div>
    </div>
    <CallToAction/>
</div>
);

export default OutdoorLiving;