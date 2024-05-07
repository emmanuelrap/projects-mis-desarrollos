import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ProjectLocalization from "../ProjectLocalization";
import AboutMe from "../AboutMe";
import ProjectTree from "../ProjectTree";

export default function NavTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="LOCATION NOW" value="1" />
            <Tab label="CHRISMAS TREE" value="2" />
            <Tab label="ABOUT ME" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ProjectLocalization />
        </TabPanel>
        <TabPanel value="2">
          <ProjectTree />
        </TabPanel>
        <TabPanel value="3">
          <AboutMe />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
