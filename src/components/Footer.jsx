import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/vr.png";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Footer = () => {
  return (
    <Box
      style={{
        width: "100%",
        borderTop: "3px solid #006064",
        backgroundColor: "rgb(33,37,41)",
        padding: "60px 0px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <img src={Logo} style={{ width: 150 }} />
        <Typography
          color="primary"
          style={{ marginTop: -10, fontSize: 18, fontWeight: "bold" }}
        >
          Marka ismi
        </Typography>
        <Typography fontSize={12} style={{ color: "white" }}>
          3D Rundgänge | 3D Marketing | 3D Videos
        </Typography>
      </Container>
      <Container
        style={{
          dislay: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography lineHeight={1.8} fontSize={14} style={{ color: "white" }}>
          Seit Beginn der 360°-Photographie (1999) ist tour360 die beste
          Adresse, wenn es um die Produktion hochwertiger 360°-Aufnahmen und
          3D-Laser-Scans geht. Individuelle 360°-Touren und Anwendungen von
          Matterport.
          <Button
           sx={{ textTransform: "none" }}
            endIcon={<KeyboardDoubleArrowRightIcon color="primary" />}
          >Über uns</Button>
        </Typography>
      </Container>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Stack alignItems="start" spacing={1}>
          <Button
            sx={{ color: "white", textTransform: "none" }}
            startIcon={<EmailIcon color="primary" />}
          >
            mail@mail.com
          </Button>
          <Button
            sx={{ color: "white", textTransform: "none" }}
            startIcon={<LocationOnIcon color="primary" />}
          >
            Monheim am Rhein
          </Button>
          <Button
            sx={{ color: "white" }}
            startIcon={<WhatsAppIcon color="primary" />}
          >
            0123456789
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
