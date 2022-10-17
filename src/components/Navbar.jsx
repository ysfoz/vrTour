import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Logo from "../assets/vr.png";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "rgb(33,37,41)"}}>
      <Container maxWidth="xl">
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            height: 50,
            padding: 20,
            
          }}
        >
          <img src={Logo} style={{ width: 70}}  />
        </Box>
      </Container>
    </AppBar>
  );
};
export default Navbar;
