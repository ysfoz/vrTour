import {
  Box,
  Button,
  Container,
  Grid,
  styled,
  Typography,
} from "@mui/material";

import BeispeilMotion from "./BeispeilMotion";
import image1 from "../assets/chicago.jpg";

const style = { width: "100%", objectFit: "contain", borderRadius: 20 };

const StyledBox = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  marginBottom: 20,
}));
const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  bottom: "10%",
  backgroundColor: "rgba(0,0,0,0.4)",
  color: "white",
}));
const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
}));
const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  color:"white",
  borderColor:"#006064",
  [theme.breakpoints.between("xs", "sm")]: {
    fontSize: 16,
  },
  [theme.breakpoints.between("sm", "lg")]: {
    fontSize: 10,
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: 16,
  },
}));
const StyledButtonContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 10,
}));

const Item = ({ title, image }) => {
  return (
    <Grid item xs={4} sm={6} md={4}>
      <BeispeilMotion
        image={
          <Box
            style={{
              position: "relative",
            }}
          >
            <img src={image} style={style} />
            <StyledContainer>
              <StyledTitle fontSize={{ xs: 20, sm: 16, md: 16, lg: 20 }}>
                {title}
              </StyledTitle>
              <StyledButtonContainer>
                <StyledButton size="small" variant="outlined" >
                  Street View
                </StyledButton>
                <StyledButton size="small" variant="outlined">
                  Ansehen
                </StyledButton>
              </StyledButtonContainer>
            </StyledContainer>
          </Box>
        }
      ></BeispeilMotion>
    </Grid>
  );
};

const BeiSpiele = () => {
  return (
    <StyledBox id="beispiele" name="beispiele">
      <StyledTitle fontSize={28} textAlign="center">Beispile</StyledTitle>
      <Grid container spacing={3} direction={{ xs: "column", sm: "row" }}>
        <Item title="Schule" image={image1} />
        <Item title="Küchenstudio" image={image1} />
        <Item title="Market" image={image1} />
        <Item title="Restaurant" image={image1} />
        <Item title="Praxis/Klinik" image={image1} />
        <Item title="Bücherei" image={image1} />
      </Grid>
    </StyledBox>
  );
};

export default BeiSpiele;
