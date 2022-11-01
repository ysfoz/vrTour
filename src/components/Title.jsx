import { Box, Button, styled } from "@mui/material";

// STYLES
const StyledButton = styled(Button)(({ theme }) => ({
  color: "white",
  textTransform: "none",
  fontSize: 16,
  [theme.breakpoints.down("md")]: {
    fontSize: 14,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  height: 40,
  width: "100%",
  backgroundColor: "#006064",
  position: "sticky",
  top: 0,
  zIndex: 3,
  display: "flex",
  justifyContent: "space-around",
}));

const Title = ({ locations }) => {
  const { vrTours, streetView, beispiele } = locations;

  const handleClick = (location) => {
    window.scrollTo({ left: 0, top: location, behavior: "smooth" });
  };

  return (
    <StyledBox>
      <StyledButton onClick={() => handleClick(vrTours)}>
        360° Vr-Tours
      </StyledButton>
      <StyledButton onClick={() => handleClick(streetView)}>
        Google Street View
      </StyledButton>
      <StyledButton onClick={() => handleClick(beispiele)}>
        Beispiele
      </StyledButton>
      <StyledButton onClick={() => handleClick(document.body.scrollHeight)}>
        Anfrage
      </StyledButton>
    </StyledBox>
  );
};

export default Title;
