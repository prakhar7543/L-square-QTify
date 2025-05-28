import React from 'react';
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import MainContent from "../components/main-content";
import Footer from '../components/footer';
import SongsHeroSection from '../songsPage/hero';
import './blurSection.css';
import App from '../App';

export default function BlurSection({isOpen}){
    console.log('BlurSection is applied')
    return(
        <div className={`main-section ${isOpen ? 'blur' : ''}`}>
            {/* <Navbar />
            <Hero />
            <MainContent />
            <Footer />
            <SongsHeroSection /> */}
            {/* <App /> */}
        </div>
    )

}
            