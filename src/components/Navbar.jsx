import { Box, styled, AppBar } from "@mui/material";

import Logo from "../assets/vr.png";

// STYLES
const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  height: 50,
  padding: 20,
}));

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "rgb(33,37,41)" }}>
      <StyledBox>
        <img src={Logo} style={{ width: 70 }} />
      </StyledBox>
    </AppBar>
  );
};
export default Navbar;
