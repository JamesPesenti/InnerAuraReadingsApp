import React from "react";
import Waves from "./Waves.css";



function Gradient(){
    return (
     
        <div className="gradient">

        <div className="inner-header flex">
            <h1 className="inner-header flex"><strong>Inner Aura Readings</strong></h1>
        </div>
            <img className="inner" src="pictures/inner.png" alt=""/>

      <div>
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x={48} y={0} fill="rgba(255,255,255,0.7" />
            <use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x={48} y={5} fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
          </g>
        </svg>
      </div>
  
        {/* <!--Waves end--> */}

        {/* <!--Content starts--> */}
        <div className="content flex">
        </div>

       </div>
    )}
  

export default Gradient;
