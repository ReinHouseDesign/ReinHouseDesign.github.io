import React from "react";
import styles from "./Home.css"
import CallToAction from "./CallToAction";
const Home = () => {
  return (
<div class="content-container">
  <div class="vid-wrapper">
    <video autoPlay muted loop id="myVideo">
      <source src="/home-vid.mp4" type="video/mp4"/>
    </video>
  </div>
<div class="content-home">
  <div>
    <h3 class="content-header">RHD IS THE FIRST CHOICE FOR DENVER RESIDENTS</h3>
    <p class="content-exp">From roofing, siding, gutters to storm restoration, you can expect award-winning service and great craftsmanship. We care about our customers, and have been serving them for almost 25 years. Schedule online today and we'll help build your dream home.</p>
  </div>
</div>
    <div class="background-ctas">
        <div id="cta" class="container-fluid">
            <h1 class="what-we-do display-6">General Contracting, Exterior Remodeling & Storm Repair Insurance Claims in Denver, CO.</h1>
            <hr class="break"></hr>
            <p class="intro">Your yard should be your sanctuary - where you leave the problems of the world behind you. Let us help you create that oasis in your yard.</p>
            <p class="intro">ReinHouse Design helps you find your design and build your custom yard. As a certified full-service hardscaping company, we can help you create a beautiful space that is custom to your needs. </p>
            <p class="intro">We pride ourselves in listening to our customers and making sure we are hearing your needs, wants, and preferences in your design. From there we will create a plan that fits that design into the landscaping and budget for your project. </p>
            <p class="intro last-intro">ReinHouse Designs is dedicated to creating you the outdoor space you are dreaming of.</p>
            <div class="button-wrapper">
                <button id="btn" class="home-btn"><a href="#/contact-us">CONTACT US ONLINE</a></button>
                <button id="btn" class="home-btn"><a href="tel:7208798827">CALL: 720-879-8827</a></button>
            </div>
        </div>
    </div>
    <div class="services-wrapper">
        <div class="services-grid">
            <a href="/exterior-remodeling-roofing-contractor-denver-colorado" class="tile-link"><div class="rhd-tile" id="roofing-tile">
                <h2 class="tile-title">Roofing</h2>
                <p class="tile-exp">As a Owen's Corning Platinum Certified company, we're a step above most contracting companies. We take care of our customers first, that's why so many Colorado residents choose us! We'll get it done and fast.</p>
            </div></a>
            <a href="/exterior-remodeling-roofing-contractor-denver-colorado" class="tile-link"><div class="rhd-tile" id="gutter-tile">
                <h2 class="tile-title">Gutters</h2>
                <p class="tile-exp">Replacement gutters and gutter guards protect your home against moisture and other forms of water damage such as rot, erosion and mold. We will ensure your rainwater management systems works well.</p>
            </div></a>
            <a href="/exterior-remodeling-roofing-contractor-denver-colorado" class="tile-link"><div class="rhd-tile" id="siding-tile">
                <h2 class="tile-title">Siding</h2>
                <p class="tile-exp">Our professional contractors can help protect your home from rain, wind and debris with our siding expertise. Our siding also provides insulation during the cold months of the year, which will save you money on your heat as well</p>
            </div></a>
            <a href="/insurance-claims-storm-restoration-denver-colorado" class="tile-link"><div class="rhd-tile" id="insurance-tile">
                <h2 class="last-tile">Insurance</h2>
                <p class="tile-exp">Whether for minor damage or major structural repairs, our professional roofers will respond quickly to restore your roof and protect your home against secondary damage following a storm. Schedule today!</p>
            </div></a>
        </div>
    </div>
    <div class="cert-lit">
      <div>
        <img class="owens-img" src="owens-corning-small.jpg"/>
      </div>
      <div class="oc-sec">
          <h1>OWEN'S CORNING PLATINUM PREFERRED CONTRACTOR</h1>
          <p class="cert-lit-exp">RHD is honored to be an official Owens Corning Platinum Preferred Contractor, an award given to just 1% of all roofing companies nationwide. To be selected as a Platinum Preferred Contractor we do the following to provide our customers with the best experience possible:</p>
          <ul>
            <li>We are in great standing with the Better Business Bureau and earned an A+ rating.</li>
            <li>We carry a multimillion dollar liability insurance plan to fully protect you and your home throughout the process.</li>
            <li>We are a debt-free business with no liens, judgements or settlements against us.</li>
            <li>We have a long-standing commitment to great craftsmanship, putting our customers first and going above and beyond to get the job done.</li>
          </ul>
      </div>
    </div>
    <div class="cert-wrapper">
        <div id="certs" class="certs container-fluid">
            <img src="/owenscorning.jpg" class="cert-img oc" />
            <img src="/bbb-logo.png" class="cert-img bbb" />
            <img src="/homeadvisor.svg" class="cert-img ha" />
            <img src="/qr.svg" class="cert-img qr" />
            <img src="/colorado-roofing.jpg" class="cert-img cra" />
        </div>
    </div>
    <CallToAction/>
</div>
)};
export default Home;