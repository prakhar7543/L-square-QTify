// import { useState } from 'react'
import Navbar from "./components/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Hero from "./components/hero";
import { Cards } from "./components/card";
import { SnackbarProvider } from "notistack";
import Section from "./components/section1";
import MainContent from "./components/main-content";
import Footer from './components/footer';
import SongsHeroSection from "./songsPage/hero";
import HomePage from '../src/pages/homePage';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
     
        <Navbar />
        <Outlet />
      
    </div>
  );
}

export default App;
