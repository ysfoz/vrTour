import { Box, Button, Container } from "@mui/material";
import React from "react";

const Title = () => {
  return (
    <Box
      style={{
        height: 40,
        width: "100%",
        backgroundColor: "#006064",
        position: "sticky",
        top: 0,
      }}
    >
      <Container sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button sx={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
          360° Vr-Tours
        </Button>
        <Button sx={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
          Google Street View
        </Button>
        <Button sx={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
          Beispiele
        </Button>
        <Button sx={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
          Anfrage
        </Button>
      </Container>
    </Box>
  );
};

export default Title;
