import { Box, Container } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import VrField from "../components/VrField";
import WebField from "../components/WebField";
import MobileField from "../components/MobileField";
import SupportField from "../components/SupportField";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Navbar />
        <Title />
        <Box sx={{marginTop:10}}>
          <VrField />
          <WebField />
          <MobileField />
          <SupportField />
        </Box>
        <Footer />
      </Box>
    </div>
  );
};

export default Home;
