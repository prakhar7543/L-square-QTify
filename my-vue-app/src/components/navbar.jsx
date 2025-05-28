import React , {useState} from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import Logo from "../components/logo";
import Search from "./search";
// import { styled } from '@mui/system';
import './navbar.css';
import FeedBack from "./feedBack";
import BlurSection from './blurSection';


function Navbar({ searchData=[] }) {

  let [isOpen, setIsOpen] = useState(false);

  let handleClickFeedBack = () => {
    console.log('feedback is clicked')
    setIsOpen(true);
    
    
  }

  let handleClose = () => {
     setIsOpen(false);
  }

  return (
    <nav className= "Navbar">
      <Link to="/" className="Logo">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
        // showListbox={true}
      />
      <Button name={"Give Feedback"} onClick={handleClickFeedBack} />
      {isOpen && <BlurSection isOpen={isOpen} />}
      <FeedBack isOpen={isOpen} onClose={handleClose} />
    </nav>
  );
}

export default Navbar;
