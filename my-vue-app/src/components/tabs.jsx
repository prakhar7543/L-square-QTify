import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SongSection from "./songSection";
import "./tabs.css";

export default function Tabs({ url, category }) {
  const [value, setValue] = React.useState("All");

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#34C94B", // Change this to your desired color
                    
                  },
                  
                  '& .css-mqjzoi-MuiButtonBase-root-MuiTab-root.Mui-selected': {
                    
                    outline: 'none'

                  }, 
                  '& .css-1t0m8ri-MuiButtonBase-root-MuiTab-root.Mui-selected': {
                    color: 'white'
                  }
                  
                }}
              >
                <Tab
                  label="All"
                  value="All"
                  sx={{
                    color: 'white',
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "600",
                    fontSize: "16px",
                    textTransform: 'capitalize',
                  }}
                />
                <Tab
                  label="Rock"
                  value="Rock"
                  sx={{
                    color: 'white' ,
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "600",
                    fontSize: "16px",
                    textTransform: 'capitalize',
                  }}
                />
                <Tab
                  label="Pop"
                  value="Pop"
                  sx={{
                    color: 'white' ,
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "600",
                    fontSize: "16px",
                    textTransform: 'capitalize',
                  }}
                />
                <Tab
                  label="Jazz"
                  value="Jazz"
                  sx={{
                    color: 'white',
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "600",
                    fontSize: "16px",
                    textTransform: 'capitalize',
                    
                  }}
                />
                <Tab
                  label="Blues"
                  value="Blues"
                  sx={{
                    color: 'white',
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "600",
                    fontSize: "16px",
                    textTransform: 'capitalize',
                    
                  }}
                />
              </TabList>
            </Box>

            <Box className='cardsTabPanel'>
              <TabPanel value="All" sx={{padding: 'unset'}}>
                <SongSection url={url} />
              </TabPanel>
              <TabPanel value="Rock" sx={{padding: 'unset'}}>''</TabPanel>
              <TabPanel value="Pop" sx={{padding: 'unset'}}>''</TabPanel>
            </Box>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}
