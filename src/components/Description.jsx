import { Button, styled, Typography, Stack, Container } from "@mui/material";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";

import CircularMotion from "./CircularMotion";

// STYLES
const StyledContainer = styled(Container)(({ theme }) => ({
  pointerEvents: "none",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  top: "40%",
  position: "absolute",
}));

const StyledLeftStack = styled(Stack)(({ theme }) => ({
  maxWidth: 300,
}));

const StyledRightStack = styled(Stack)(({ theme }) => ({
  maxWidth: 300,
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: 28,
  color: "white",
  fontWeight: "bold",
}));

const StyledText = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  color: "white",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  pointerEvents: "all",
  alignSelf:"flex-start"
}));

const Description = () => {
  const handleClick = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  return (
    <StyledContainer>
      <StyledLeftStack alignItems={"center"} spacing={1}>
        <StyledTitle>360° Vr-Tours & Fotos</StyledTitle>
        <StyledText>
          Ich biete Ihnen hochwertige Panorama für Google Street View oder Ihre
          Webseite
        </StyledText>
        <StyledButton onClick={handleClick} variant="contained">
          Kontakt
        </StyledButton>
      </StyledLeftStack>
      <StyledRightStack alignItems={"center"} spacing={1}>
        <StyledTitle>Drag it</StyledTitle>
        <CircularMotion
          icon={<ThreeDRotationIcon fontSize="large" color="primary" />}
        />
      </StyledRightStack>
    </StyledContainer>
  );
};

export  default Description ;
