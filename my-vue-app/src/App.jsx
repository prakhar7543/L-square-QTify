// import { useState } from 'react'
import Navbar from './components/navbar'
import { BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import Hero from './components/hero'

function App() {
  

  return (
    <div className='app'>
    <Router>
    <Navbar />
    <Hero />
    </Router>
    
    </div>
  )
}

export default App
