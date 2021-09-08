import React from "react";
import Slider from "./Slider.css";
import ScrollAnimation from "react-animate-on-scroll";
import AOS from "aos";
import "aos/dist/aos.css";


AOS.init(); {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration : 200
    });
  }

function S(){
    return (
        
<div>
{/* <ScrollAnimation animateIn="fade"> */}
<div className="slider" data-aos="zoom-in">
    <div className="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <h3 className="slideH3">A Little About Me</h3>
                <br/>
                <br/>
                <h7>I'm Pedro Guerra from Chicago Illinois and I have a </h7>
                <h7>passion for using my abilities to help those that </h7>
                <h7>are searching for the clarity that they need in their life.</h7>
            </div>
            <div className="carousel-item">
                <h3 className="slideH3">My Abilities</h3>
                <br/>
                <br/>
                <h7> I have been developing my clairvoyance since I discovered I had a gift </h7>
                <h7> as a teen. I started out mostly just guiding my friends and family with the </h7>
                <h7> insights I gained from visions that I was having about them. </h7>
                <h7> My journey has now evolved into doing over 1500 readings all across the country & world. <i
                        className="fas fa-globe-americas"></i></h7>
                {/* <img className="d-block w-100" src="..." alt=""> */}
            </div>
            <div className="carousel-item">
                <h3 className="slideH3">My Services</h3>
                <br/>
                <h7> Readings | Chakra Allignment | Tarot Card Readings | </h7>
                <h7>Energy Healing Sessions | Numerology</h7>
                <br/>
                <br/>
                <img class="d-block w-100" src="..." alt=""/>
        </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
</div>
 {/* </ScrollAnimation> */}
</div>


    )
}

export default S;

