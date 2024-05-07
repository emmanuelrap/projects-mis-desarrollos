import { useState } from "react";

import { Box, Paper, Typography } from "@mui/material";
import { HashRouter, Routes, Route } from "react-router-dom";
import NavTabs from "./components/atoms/NavTabs";
import Home from "./components/Home";

function App() {
  return (
    <Box
      sx={{ textAlign: "center", backgroundColor: "#EEE", minHeight: "100vh" }}
    >
      <NavTabs />
    </Box>
  );
}

export default App;
