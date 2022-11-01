import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import Logo from "../assets/vr.png";

// STYLES
const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  borderTop: "3px solid #006064",
  backgroundColor: "rgb(33,37,41)",
  padding: "60px 0px",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: 30,
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const StyledInfoContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: "white",
  textTransform: "none",
}));

const StyledInfoButton = styled(Button)(({ theme }) => ({
  color: "white",
  textTransform: "none",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const StyledText = styled(Typography)(({ theme }) => ({
  color: "white",
}));

const Footer = () => {
  return (
    <StyledBox>
      <StyledContainer sx={{ gap: 2 }}>
        <img src={Logo} style={{ width: 150 }} />
        <Typography
          color="primary"
          style={{ marginTop: -10, fontSize: 18, fontWeight: "bold" }}
        >
          Marka ismi
        </Typography>
        <StyledText fontSize={12}>
          3D Rundgänge | 3D Marketing | 3D Videos
        </StyledText>
      </StyledContainer>
      <StyledInfoContainer>
        <StyledText lineHeight={1.8} fontSize={12} display>
          Seit Beginn der 360°-Photographie (1999) ist tour360 die beste
          Adresse, wenn es um die Produktion hochwertiger 360°-Aufnahmen und
          3D-Laser-Scans geht. Individuelle 360°-Touren und Anwendungen von
          Matterport.
          <StyledButton
            endIcon={<KeyboardDoubleArrowRightIcon color="primary" />}
          >
            Mehr Informationen über uns
          </StyledButton>
        </StyledText>
      </StyledInfoContainer>
      <StyledContainer>
        <Stack alignItems="start" spacing={1}>
          <StyledButton startIcon={<EmailIcon color="primary" />}>
            mail@mail.com
          </StyledButton>
          <StyledButton startIcon={<LocationOnIcon color="primary" />}>
            Monheim am Rhein
          </StyledButton>
          <StyledButton startIcon={<WhatsAppIcon color="primary" />}>
            0123456789
          </StyledButton>
          <StyledInfoButton
            endIcon={<KeyboardDoubleArrowRightIcon color="primary" />}
          >
            Mehr Informationen über uns
          </StyledInfoButton>
        </Stack>
      </StyledContainer>
    </StyledBox>
  );
};

export default Footer;
