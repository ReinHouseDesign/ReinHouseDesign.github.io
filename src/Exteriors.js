import React from "react";
import styles from "./Exteriors.css"
import CallToAction from "./CallToAction";

const Exteriors = () => (
<div class="content">
    <div class="ext-wrap">
        <h3 class="ext-rem-head">Exterior Remodeling Services</h3>
        <div id="c-g" class="card-group">
          <div class="card">
            <img class="card-img-top" src="/paving.jpg" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Interlocking Custom Paving</h5>
              <p class="card-text">Our interlocking pavers connect concrete blocks together through the use of sand, and can cover any patio, decking, driveway, hot tub pad or walkway. Our team can design a stunning concept for your personal style.</p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="/turf.jpg" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Artificial Turf</h5>
              <p class="card-text">We can design a no-maintenance yard with green grass all year round for your convenience. Our turf is realistic and durable that it won't fade in the Colorado sun but also soft enough to play on.</p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="/pool.webp" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Pools and Decks</h5>
              <p class="card-text">We also specialize in pools! We can add any size pool to your backyard or give an existing pool deck a face lift. We are here to create a custom look that fits your style and leaves you happy.</p>
            </div>
          </div>
        </div>
        <hr id="ext-hr"></hr>
        <div id="c-g" class="card-group">
        <div class="card">
            <img class="card-img-top" src="/deck.webp" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Custom Decks</h5>
              <p class="card-text">No matter your style we can build composite decks, wood decks, decks with steel accents and handrails and much more. No matter your style we can create a custom design exclusively for you.</p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="/outdoor.webp" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Outdoor Living Spaces</h5>
              <p class="card-text">Let us help you turn your backyard into your dream oasis to include out door kitchens, fire pits, sun/wind protection, exterior lighting, pergolas, plant installation and more. The sky is the limit to turn your dream into reality.</p>
            </div>
          </div>
        </div>
    </div>
    <div class="r-wrap">
        <div class="roof-banner">
            <h3>Roofing</h3>
        </div>
        <div class="roof-wrap">
            <img class="roof-img" src="/roofing.jpg" />
            <div class="roof-div">
                <h3 class="ext-rem-head roof-head">Commercial and Residential Roofing</h3>
                <p class="roof-p">We offer commercial and residential roofing services. To maximize our flexibility we have many different materials for you to choose from when re-roofing your home. Materials include Shingles, Shake, Tile, Metal, Slate, Flat/Low Slope. Call today to get your project started!</p>
            </div>
        </div>
    </div>
    
    <div class="storm-restoration-cta">
            <h2>Roof Insurance Claims</h2>
            <a id="ins-btn" class="home-btn btn" href="/storm-insurance-claims-denver">INSURANCE CLAIMS</a>
            <div class="sty-bar"></div>
        </div>
    <CallToAction/>
</div>
);

export default Exteriors;