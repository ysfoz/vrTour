import { Button, Container, Box, Typography, Stack } from "@mui/material";
import React from "react";
import Logo from "../assets/vr.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const BottumMenu = () => {
  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <Container
        flex={1}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Stack direction={"row"}>
          <Button
            sx={{ "& > :hover": { color: "#006064" } }}
            startIcon={<LinkedInIcon style={{ fontSize: 25 }} />}
          ></Button>
          <Button
            sx={{ "& > :hover": { color: "#006064" } }}
            startIcon={<FacebookIcon style={{ fontSize: 25 }} />}
          ></Button>
          <Button
            sx={{ "& > :hover": { color: "#006064" } }}
            startIcon={<TwitterIcon style={{ fontSize: 25 }} />}
          ></Button>
          <Button
            sx={{ "& > :hover": { color: "#006064" } }}
            startIcon={<InstagramIcon style={{ fontSize: 25 }} />}
          ></Button>
        </Stack>
      </Container>
      <Container
        flex={1}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button sx={{ color: "black", fontSize: 12 }}>impressium</Button>
        <Typography>|</Typography>
        <Button sx={{ color: "black", fontSize: 12 }}>Datenshutz</Button>
      </Container>
      <Container
        flex={1}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <img src={Logo} style={{ width: 40 }} />
        <Typography fontSize={14}> www.webseite.de | © 2022 </Typography>
      </Container>
    </Box>
  );
};

export default BottumMenu;
