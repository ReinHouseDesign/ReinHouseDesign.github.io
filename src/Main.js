import React from "react";
import {Route, Routes} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home"
import Work from "./Work";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Exteriors from "./Exteriors";
import Insurance from "./Insurance"

const Main = () => (
<main>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/exterior-remodeling-roofing-contractor-denver-colorado" element={<Exteriors/>} />
        <Route path="/storm-insurance-claims-denver" element={<Insurance/>} />
        <Route path="/client-work" element={Work} />
        <Route path="/about-our-roofing-services" element={<AboutUs/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
    </Routes>
</main>
);
export default Main;