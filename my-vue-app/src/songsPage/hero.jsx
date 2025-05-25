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

// export let DummyData = [
//   {
//     id: "001",
//     title: "Intentional Wood",
//     description:
//       "Excepturi hic sed voluptatibus. Fugiat tenetur cupiditate. Voluptatem reprehenderit animi modi tempora possimus beatae perspiciatis. Non temporibus esse atque similique eius esse quos.",
//     follows: 13868,
//     image:
//       "https://images.pexels.com/photos/227692/landscape-reflection-waves-ripples-227692.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//     slug: "intentional-wood",
//     songs: [
//       {
//         id: "89eef555-ee1d-480f-af39-3e8bae7d109e",
//         title: "Bad",
//         artists: ["Luz Nader"],
//         genre: {
//           key: "pop",
//           label: "Pop",
//         },
//         likes: 89867,
//         image:
//           "https://images.pexels.com/photos/2418664/pexels-photo-2418664.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//         durationInMs: 31560,
//       },
//       {
//         id: "0c695bcb-a169-453f-87db-1430b53b51e7",
//         title: "Maybellene",
//         artists: [
//           "Lora Legros V",
//           "Mr. Andres Koepp PhD",
//           "Jeffrey Kautzer III",
//         ],
//         genre: {
//           key: "pop",
//           label: "Pop",
//         },
//         likes: 48932,
//         image:
//           "https://images.pexels.com/photos/80453/poppy-field-of-poppies-flower-flowers-80453.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//         durationInMs: 32776,
//       },
//       {
//         id: "ca3d4a82-b3bf-4cf1-bc1c-2ca547942236",
//         title: "Hungry Heart",
//         artists: ["Georgia Lockman"],
//         genre: {
//           key: "blues",
//           label: "Blues",
//         },
//         likes: 44766,
//         image:
//           "https://images.pexels.com/photos/425047/pexels-photo-425047.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//         durationInMs: 31292,
//       },
//     ],
//   },
// ];
