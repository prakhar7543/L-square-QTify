import React from "react";
import LogoImage from "../assets/LogoImage.png";
import './logo.css'

export default function Logo() {
  return <img className="logoPic" src={LogoImage} alt="logo" width={67} height={34} />;
}
