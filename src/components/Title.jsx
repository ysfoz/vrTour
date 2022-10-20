import { Box, Button, styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  color: "white",
  // fontWeight: "bold",
  textTransform: "none",
  fontSize: 16,
  [theme.breakpoints.down("md")]:{
    fontSize: 14,
  },
  [theme.breakpoints.down("sm")]:{
   fontSize: 12,
  }
}));



const StyledBox = styled(Box)(({ theme }) => ({
  height: 40,
  width: "100%",
  backgroundColor: "#006064",
  position: "sticky",
  top: 0,
  zIndex: 2,
  display: "flex",
  justifyContent: "space-around",
}));

const Title = () => {
  return (
    <StyledBox>
      <StyledButton>360° Vr-Tours</StyledButton>
      <StyledButton>Google Street View</StyledButton>
      <StyledButton>Beispiele</StyledButton>
      <StyledButton>Anfrage</StyledButton>
    </StyledBox>
  );
};

export default Title;
