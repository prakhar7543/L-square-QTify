// import { useState } from 'react'
import Navbar from './components/navbar'
import { BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import Hero from './components/hero'

function App() {
  

  return (
    <>
    <Router>
    <Navbar />
    <Hero />
    </Router>
    
    </>
  )
}

export default App
