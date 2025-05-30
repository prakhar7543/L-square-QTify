import React from "react";
import "./hero.css";
import back from "../assets/back.png";
import shuffleButton from "../assets/shuffleButton.png";
import addToLibraryButton from "../assets/addToLibraryButton.png";
import Section from "../components/section1";
import AlbumPage from "../pages/albumPage";
import { useNavigate } from "react-router-dom";

export default function SongsHeroSection({ item }) {
  const navigate = useNavigate();

  if (!item || !item.songs) {
    return <div>No album data available in SongsHeroSection</div>;
  }
  console.log(`items of songhero section ${item}`);
  let album = item;
  let albumSongs = album.songs;

  let albumSongsImg = ({ image, title }) => {
    return (
      <div className="songCover">
        <div className="songCoverImg">
          <img src={image} alt="" />
        </div>
        <p>{title}</p>
      </div>
    );
  };

  let handleBackClick = () => {
    console.log('back button has clicked')
    navigate('/');
  };

  return (
    <div className="songsContainer">
      <div className="heroSection">
       

        <div className="backIcon">
          <img
            src={back}
            alt="icon"
            onClick={handleBackClick}
            style={{ cursor: "pointer", pointerEvents: "all", margin: '30px 0px', marginLeft: '80px' }} />
        </div>

        <div className="albumDescription">
          <div className="albumImg">
            <img src={album.image} alt="" />
          </div>

          <div className="albumName">
            <div className="descript">
              <h1>{album.title}</h1>
              <p>{album.description}</p>
              <p>{`${album.songs.length} Songs * ${album.follows} Follows`}</p>
            </div>

            <div className="buttonIcons">
              <img src={shuffleButton} alt="" />
              <button>
                <img src={addToLibraryButton} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mainSection">
        <div className="mainContainer">
          <div className="header">
            <p>Title</p>
            <p>Artists</p>
            <p>Duration</p>
          </div>

          <div className="contents">
            {albumSongs.map((item, index) => (
              <React.Fragment key={index}>
                <div className="songContent">
                  <div className="songPic">
                    {albumSongsImg({ image: item.image, title: item.title })}
                  </div>
                  <div className="songArtists">{item.artists.join(", ")}</div>
                  <div className="songDuration">
                    {`${item.durationInMs} ms`}
                  </div>
                </div>
                <hr
                  style={{
                    borderColor: "white",
                    margin: "revert",
                    alignItems: "center",
                  }}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

