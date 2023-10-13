import React from "react";
import "./Hero.css";
import CountUp from 'react-countup';
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerwidth flexCenter hero-container">

      <div class="container text-center">
  <div class="row">
    <div class="col">
    <div className=" flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />

            <h1>
              Vehicle
              <br/>
              RTO Registration
              <br />
              System
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Simplify vehicle registration with our user-friendly RTO website.
            </span>
            <span className="secondaryText">
              Experience hassle-free online services and efficient management of
              your vehicle records.
            </span>
          </div>
        </div>
        <div className="flexCenter stats">
          <div className="flexColCenter stat">
            <span>
              <CountUp start={8000} end={9000} duration={4} />
              <span>+</span>
            </span>
            <span className="secondaryText">vehicle registered</span>
          </div>
        </div>
    </div>
    <div class="col">
    <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image1.jpeg" alt=""></img>
          </div>
        </div>
    </div>
  </div>
</div>


        {/* left side */}
        {/* <div className=" flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />

            <h1>
              Vehicle
              <br/>
              RTO Registration
              <br />
              System
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Simplify vehicle registration with our user-friendly RTO website.
            </span>
            <span className="secondaryText">
              Experience hassle-free online services and efficient management of
              your vehicle records.
            </span>
          </div>
        </div>
        <div className="flexCenter stats">
          <div className="flexColCenter stat">
            <span>
              <CountUp start={8000} end={9000} duration={4} />
              <span>+</span>
            </span>
            <span className="secondaryText">vehicle registered</span>
          </div>
        </div> */}
        {/*right side*/}

        {/* <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image1.jpeg" alt=""></img>
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default Hero;
