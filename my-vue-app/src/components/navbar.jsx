import React from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import Logo from "../components/logo";
import Search from "./search";
// import { styled } from '@mui/system';
import './navbar.css';

function Navbar({ searchData }) {
  return (
    <nav className= "navbar">
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a album of your choice"
        searchData={searchData}
      />
      <Button name={"Give Feedback"} />
    </nav>
  );
}

export default Navbar;
