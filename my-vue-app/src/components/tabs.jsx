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
                    backgroundColor: "black",
                  }}
                />
                <Tab
                  label="Rock"
                  value="Rock"
                  sx={{
                    color: "white",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                />
                <Tab
                  label="Pop"
                  value="Pop"
                  sx={{
                    color: "white",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                />
              </TabList>
            </Box>

            <Box>
              <TabPanel value="All">
                <SongSection url={url} />
              </TabPanel>
              <TabPanel value="Rock">''</TabPanel>
              <TabPanel value="Pop">''</TabPanel>
            </Box>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}
