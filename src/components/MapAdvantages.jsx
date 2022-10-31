import { Box, Container, Link, Stack, styled, Typography } from "@mui/material";
import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import "./style.css";


const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 30,
  marginBlock: 50,
  color: theme.palette.text.secondary,
  
}));
const StyledContainer = styled(Stack)(({ theme }) => ({}));
const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: 26,
  textAlign: "center",
}));
const Desc = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  textAlign: "center",
  width: "80%",
}));

const UnderText = styled(Typography)(({ theme }) => ({
  alignSelf: "end",
  fontSize: 12,
  margin: 5,
}));

const BenefitsContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
const Benefits = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  textAlign: "center",
}));
const benefitsItems = [
  [
    <RemoveRedEyeIcon color="primary" />,
    "62 % der Besucher bevorzugen Einträge mit Innenaufnahmen vom Geschäft.",
  ],
  [
    <ThreeSixtyIcon color="primary" />,
    "Die Wahrscheinlichkeit, dass du mit deinem Eintrag das Interesse potenzieller Kunden weckst, ist doppelt so hoch, wenn du Fotos und eine virtuelle Tour hinzufügst.",
  ],
  [
    <PlaylistAddCheckIcon color="primary" />,
    "Mit vollständigen Einträgen kannst du Vertrauen aufbauen. Unternehmen, die das beachten, werden mit einer um 78 % höheren Wahrscheinlichkeit als gut etabliert angesehen.",
  ],
  [
    <BusinessCenterIcon color="primary" />,
    "Durchschnittlich führen 41 % der Unternehmenssuchen auf Google Maps zu einem Besuch im Geschäft.",
  ],
  [
    <SentimentSatisfiedAltIcon color="primary" />,
    "Vollständige Einträge mit Fotos und Touren steigern die Kaufbereitschaft um 29 %.",
  ],
];

const Item = ({ icon, desc }) => {
  return (
    <BenefitsContainer>
      {icon}
      <Benefits>{desc}</Benefits>
    </BenefitsContainer>
  );
};

const MapAdvantages = () => {
  return (
    <StyledBox>
      <Title>360°-Bilder und Touren sorgen für mehr Umsatz</Title>
      <Desc>
        Wenn dein Brancheneintrag hochwertige Fotos enthält, wirkt das
        ansprechend auf die Nutzer und hilft dir, neue Kunden zu gewinnen. Mit
        360°-Touren können die Ladenbesucher vorab einen Blick in dein Geschäft
        werfen. Das erhöht deine Onlinesichtbarkeit.
      </Desc>
      <StyledContainer direction={{lg:"row"}} spacing={{xs:5,lg:3}}>
        {benefitsItems.map(([icon, desc],index) => (
          <Item icon={icon} desc={desc} key={index}/>
        ))}
      </StyledContainer>
      <UnderText color="secondary.light">
        Die Informationen wurden von{" "}
        <Link
          color="primary.light"
          sx={{ textDecoration: "none" }}
          href="https://www.google.de/intl/de/streetview/business/"
          target="_blank"
        >
          google
        </Link>{" "}
        bekommen
      </UnderText>
    </StyledBox>
  );
};

export default MapAdvantages;
