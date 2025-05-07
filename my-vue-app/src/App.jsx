// import { useState } from 'react'
import Navbar from "./components/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Hero from "./components/hero";
import { Cards } from "./components/card";
import { SnackbarProvider } from "notistack";
import Section from "./components/section1";
import MainContent from './components/Main-content';

function App() {
  return (
    <div className="app">
      <Router>
        <SnackbarProvider>
          <Navbar />
    <Hero />
<MainContent />
          {/* <Cards /> */}
          {/* <Section url="https://qtify-backend-labs.crio.do/albums/top" category={'Top Albums'} buttonName={'Show all'}/> */}
        </SnackbarProvider>
      </Router>
    </div>
  );
}

export default App;
