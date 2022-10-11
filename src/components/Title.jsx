import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const Title = () => {
  return (
    <Box
      style={{
        height: 60,
        width: "95%",
        backgroundColor: "#008e76",
        position: "absolute",
        top: 150,
        borderRadius: 2,
        padding: 6,
        display:'flex',
        flexDirection:'column',
        //justifyContent:'center',
        alignItems:'center',


      }}
    >
      <Typography color="black" fontWeight="bold" fontSize={20}>
        Wir Unterstützen Sie für Ihre IT Bedürfnisse
      </Typography>
      <Container sx={{display:'flex', justifyContent:'space-around'}}>
        <Button sx={{ color: "white", fontWeight: "bold",fontSize:16 }}>
          360° Vr-Tours{" "}
        </Button>
        <Button sx={{ color: "white", fontWeight: "bold",fontSize:16 }}>
          Web Design
        </Button>
        <Button sx={{ color: "white", fontWeight: "bold",fontSize:16 }}>
         Mobile Apps
        </Button>
        <Button sx={{ color: "white", fontWeight: "bold",fontSize:16 }}>
          IT Support{" "}
        </Button>
      </Container>
    </Box>
  );
};

export default Title;
