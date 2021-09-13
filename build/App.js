import React from 'react';
import ReactDOM from 'react-dom';
import Waves from "./components/Waves";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Slider from "./components/Slider";
import Chakra from "./components/Chakra";
import ChakraColor from "./components/ChakraColor";
import Testimonials from "./components/Testimonials";
// import Testimonials2 from "./Testimonials2";
import Map from "./components/Map";
import Price from "./components/Price";
import Footer from "./components/Footer";
// import AOS from "./AOS";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import JS from "../src/index.js";
import $ from "jquery";




function App () {

  return (
    <div>
    <Waves />
    <NavBar />
    <AboutMe />
    <Slider />
    <Chakra />
    <ChakraColor />
    <Testimonials />
    {/* <Testimonials2 /> */}
    <Map />
    <Price />
    <Footer />
     </div>
  );
  }

export default App;
