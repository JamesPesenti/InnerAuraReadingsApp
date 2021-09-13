import React from "react";
import Chakra from "./Chakra.css";
import ScrollAnimation from 'react-animate-on-scroll';
import AOS from "aos";
import "aos/dist/aos.css";



AOS.init(); {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration : 200
    });
  }


function C(){

    return (
        
        <div data-aos="zoom-in">
        {/* <ScrollAnimation animateIn="fade"> */}
        <div className="button2">
            {/* <a class="c-social-links__link">
                <btn btn btn-primary></btn>
            </a> */}
        </div>
        <section id="Chakra">
            <h2 style={{color: "white"}}>Chakra Intro</h2>
            <span>
                <h4 className="color-change">Below I will give you a short introduction to Chakras </h4>
            </span>
            <br/>
            <h7>Chakras are the spiritual energy center within our bodies.</h7>
            <h7>The 7 Chakras each correspond to specific organs </h7>
            <h7>as well as physical/emotional/spiritual states of</h7>
            <h7> being and influence all areas of your life.</h7>
            <br/>
            <h7>Blocked Chakras can be healed with energy and a combination of treatments.</h7>
            <h7>Healing Chakras will open up the flow of energies to different chakras and will bring balance.</h7>
            <br/>
            <br/>
            <h7>Swipe down <i class="far fa-hand-point-down"></i> to watch a short video that explains opening Chakras and also explore deeper into each Chakra and what
                they mean to your spiritual well being.</h7>
            <br/>
            <br/>
            <br/>
            <br/>

        <div className="button1">
            <a class="c-social-links__link"
                href="https://jamespesenti.github.io/InnerAuraReadings/chakras.html">
                <btn btn btn-primary></btn>
            </a>
        </div>
        <div className="button11">
            <a class="c-social-links__link"
                href="https://jamespesenti.github.io/InnerAuraReadings/chakras.html">
                <btn btn btn-primary></btn>
            </a>
        </div>
        <div className="button2">
            <a class="c-social-links__link"
                href="https://jamespesenti.github.io/InnerAuraReadings/chakras.html">
                <btn btn btn-primary></btn>
            </a>
        </div>
        <div className="button3">
            <a class="c-social-links__link"
                href="https://jamespesenti.github.io/InnerAuraReadings/chakras.html">
                <btn btn btn-primary></btn>
            </a>
        </div>
        <div className="button4">
            <a class="c-social-links__link"
                href="https://jamespesenti.github.io/InnerAuraReadings/chakras.html">
                <btn btn btn-primary></btn>
            </a>
        </div>
        <div className="button5">
            <a class="c-social-links__link"
                href="https://jamespesenti.github.io/InnerAuraReadings/chakras.html">
                <btn btn btn-primary></btn>
            </a>
        </div>
        </section>
        {/* <iframe width="200" height="315" src="https://www.youtube.com/embed/StrbppmsZJw?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
  
  <div>
  <iframe className="video" width="200" height="315" src="https://www.youtube.com/embed/StrbppmsZJw?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  
  </div>


    )
}


export default C;