import { Container, Stack, styled, Typography } from "@mui/material";

import Gstv from "../assets/gstv.png";

// STYLES
const StyledBox = styled(Stack)(({ theme }) => ({}));

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.text.secondary,
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: 26,
  textAlign: "center",
  color: theme.palette.text.primary,
}));

const Desc = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  textAlign: "center",
}));

const PositivesContainer = styled(Container)(({ theme }) => ({}));

const Benefits = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  lineHeight: 2,
}));

const style = { color: "#006064", fontSize: 20, fontWeight: "bold" };

const StreetView = () => {
  return (
    <StyledBox
      id="streetview"
      name="streetview"
      direction={{ lg: "row" }}
      spacing={{ xs: 10, lg: 5 }}
    >
      <StyledContainer>
        <img src={Gstv} style={{ width: "100%" }} />
      </StyledContainer>
      <StyledContainer>
        <Title>360° Business View auf Google Maps</Title>
        <Desc>
          Step inside! Als zertifizierte Google Street-View 360° Anbieter nutzen
          wir das umfangreiche Fotomaterial der 3D Tour, um optional noch einen
          virtuellen Rundgang für Ihren Business Eintrag bei Google Maps zu
          erzeugen. Ideal für Neueröffnungen, Popup-Stores oder auch
          Ausstellungen. Ein anerkannter Marketing-Booster für Ihr Business!
        </Desc>
        <PositivesContainer>
          <Benefits>
            <span style={style}>✓</span> Positiver Effekt auf das Google Ranking
          </Benefits>
          <Benefits>
            <span style={style}>✓</span> Erhöhte Sichtbarkeit im Internet
          </Benefits>
          <Benefits>
            {" "}
            <span style={style}>✓</span> Authentische Präsentation
          </Benefits>
          <Benefits>
            <span style={style}>✓</span> Längere Verweildauer der Interessenten
          </Benefits>
        </PositivesContainer>
      </StyledContainer>
    </StyledBox>
  );
};

export default StreetView;
