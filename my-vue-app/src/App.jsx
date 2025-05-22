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
import SongsHeroSection, {DummyData} from "./songsPage/hero";

function App() {
  return (
    <div className="app">
      <Router>
        <SnackbarProvider>
          {/* <Navbar />
          <Hero />
          <MainContent />
          <Footer /> */}
          <SongsHeroSection DummyData={DummyData}/>
        </SnackbarProvider>
      </Router>
    </div>
  );
}

export default App;
