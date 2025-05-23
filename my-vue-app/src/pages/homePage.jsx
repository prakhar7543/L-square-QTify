import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import MainContent from "../components/main-content";
import Footer from '../components/footer';
import { SnackbarProvider } from "notistack";
import Hero from "../components/hero";
// import Navbar from "./components/navbar";
// import "./App.css";
// import { Cards } from "./components/card";
// import Section from "./components/section1";
// import SongsHeroSection, {DummyData} from "./songsPage/hero";


export default function HomePage(){

    return(
        <div className='homepage'>
        <SnackbarProvider>
          <Hero />
          <MainContent />
          <Footer />
        </SnackbarProvider>
        </div>
    )
};