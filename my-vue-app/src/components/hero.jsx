import React from "react";
// import styles from "./Hero.module.css";
import hero_headphones from "../assets/hero_headphones.png"
import './hero.css';

function Hero() {
  return (
    <div className='hero'>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          src={hero_headphones}
          width={212}
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;
