// import { useState } from 'react'
import Navbar from "./components/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Hero from "./components/hero";
import { Cards } from "./components/card";
import { SnackbarProvider } from "notistack";
import Section from "./components/section1";
import MainContent from "./components/main-content";
import Footer from "./components/footer";
import SongsHeroSection from "./songsPage/hero";
import HomePage from "../src/pages/homePage";
import { Outlet } from "react-router-dom";
import FeedBack from "../src/components/feedBack";
import {
  fetchTopAlbum,
  fetchNewAlbum,
  fetchSongs,
  fetchFilters,
} from "./components/api";
import { useEffect, useState } from "react";

function App() {
  let [data, setData] = useState([]);

  let generateData = (key, source) => {
    source().then((data) => {
      setData((prevData) => {
        return { ...prevData, [key]: data };
      });
    });
  };

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbum);
    generateData("newAlbums", fetchNewAlbum);
    generateData("songs", fetchSongs);
    generateData("genres", fetchFilters);
  }, []);

  let { topAlbums = [], newAlbums = [], songs = [], genres = [] } = data;

  return (
    <div className="app">
      <Navbar searchData={[...topAlbums, ...newAlbums]} />
      <Outlet />
    </div>
  );
}

export default App;
