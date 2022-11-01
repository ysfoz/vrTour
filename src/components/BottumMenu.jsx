import { useState } from "react";
import {
  Button,
  Container,
  Box,
  Typography,
  Stack,
  styled,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

import Logo from "../assets/vr.png";


// STYLES 
const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  marginBottom: 10,

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: 10,
  },
}));
const StyledIconButton = styled(Button)(({ theme }) => ({
  "& > :hover": { color: "#006064" },
}));

const StyledTextButton = styled(Button)(({ theme }) => ({
  color: "black",
  fontSize: 12,
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const BottumMenu = () => {

  // to get top of the page with scroll actions
  const [topButtonFlag, setTopButtonFlag] = useState("none");

  const showTopButton = () => {
    if (document.documentElement.scrollTop > 500) {
      setTopButtonFlag("block");
    } else {
      setTopButtonFlag("none");
    }
  };
  window.addEventListener("scroll", showTopButton);

  const getTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledBox>
      <StyledContainer>
        <Stack direction={"row"}>
          <StyledIconButton
            startIcon={<LinkedInIcon style={{ fontSize: 25 }} />}
          ></StyledIconButton>
          <StyledIconButton
            startIcon={<FacebookIcon style={{ fontSize: 25 }} />}
          ></StyledIconButton>
          <StyledIconButton
            startIcon={<TwitterIcon style={{ fontSize: 25 }} />}
          ></StyledIconButton>
          <StyledIconButton
            startIcon={<InstagramIcon style={{ fontSize: 25 }} />}
          ></StyledIconButton>
        </Stack>
      </StyledContainer>
      <StyledContainer>
        <StyledTextButton>impressium</StyledTextButton>
        <Typography>|</Typography>
        <StyledTextButton>Datenshutz</StyledTextButton>
      </StyledContainer>
      <StyledContainer>
        <img src={Logo} style={{ width: 40 }} />
        <Typography fontSize={14}> www.webseite.de | © 2022 </Typography>
      </StyledContainer>
      
      <IconButton
        sx={{ display: topButtonFlag, position: "fixed", left: 2, bottom: 6 }}
        color="info"
        aria-label="get top"
        component="label"
        onClick={getTop}    
      >
        <KeyboardDoubleArrowUpIcon />
      </IconButton>
    </StyledBox>
  );
};

export default BottumMenu;
