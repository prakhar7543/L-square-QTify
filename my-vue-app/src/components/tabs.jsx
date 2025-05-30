import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SongSection from "./songSection";
import "./tabs.css";
import axios from "axios";
import { CircularProgress } from "@mui/material";

export default function Tabs({ url, category }) {
  const [value, setValue] = React.useState("All");
  let [allSongs, setAllSongs] = useState([]);
  let [genre, setGenre] = useState([]);
  let [filterSongs, setFilterSongs] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    let genreUrl = "https://qtify-backend-labs.crio.do/genres";

    let requests = [axios.get(url), axios.get(genreUrl)];

    Promise.all(requests)
      .then((responses) => {
        let songs = responses[0].data;
        let generes = responses[1].data.data;

        console.log(songs);
        setAllSongs(songs);
        if (Array.isArray(generes)) {
        setGenre(generes);
      } else {
        console.error("Genres data is not an array:", generes);
        setGenre([generes]); // Set to an empty array if the data is not an array
      }
    })
      .catch((error) => {
        console.log("An error occurred:", error);
      })

      .finally(() => {
      setLoading(false);
    });

  }, [url]);

  useEffect(() => {
    setFilterSongs(value === 'All' ? allSongs : allSongs.filter((song) => song.genre.key === value));
    console.log(filterSongs);
  }, [value, allSongs])

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <div className="tabsContainer">
      <div className="tabsInnerContainer">
        <div className="menu">
          <h4>{category}</h4>
        </div>

        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                sx={{
                  "& .Mui-selected": {
            outline: "none", // Ensures no outline on selected tab
            color: "white",
          },
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#34C94B",
                  },

                  "& .css-mqjzoi-MuiButtonBase-root-MuiTab-root.Mui-selected": {
                    outline: "none",
                  },
                  "& .css-1t0m8ri-MuiButtonBase-root-MuiTab-root.Mui-selected":
                    {
                      color: "white",
                      
                    },
                    
                }}
              >
                <Tab
                  label="All"
                  value="All"
                  sx={{
                    color: "white",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "600",
                    fontSize: "16px",
                    textTransform: "capitalize",
                  }}
                />

                {genre.map((item) => (
                  <Tab
                    label={item.label}
                    value={item.key}
                    key={item.value}
                    sx={{
                      color: "white",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "600",
                      fontSize: "16px",
                      textTransform: "capitalize",
                    
                    }}
                  />
                ))}
                
                
                
              </TabList>
            </Box>

{loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100%" padding={5} >
            <CircularProgress sx={{color:' #34C94B'}}/>
          </Box>
       ) : (
            <Box className="cardsTabPanel">
              {genre.map((item) => (
              <TabPanel value={item.key} key={item.key} sx={{ padding: "unset" }}>
                <SongSection songs={filterSongs} category={category} />
              </TabPanel>
            ))}
            <TabPanel value="All" sx={{ padding: "unset" }}>
              <SongSection songs={filterSongs} category={category} />
            </TabPanel>
              
            </Box>
       )}
          </TabContext>
        </Box>
      </div>
    </div>
  );
}

