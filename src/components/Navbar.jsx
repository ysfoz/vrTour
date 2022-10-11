import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Logo from "../assets/omnia360-Logo.png";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            height: 150,
            padding: 20,
          }}
        >
          <img src={Logo} style={{ width: 150, height: 100 }} />
        </Box>
      </Container>
    </AppBar>
  );
};
export default Navbar;
