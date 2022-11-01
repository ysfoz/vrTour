import { Stack, styled } from "@mui/material";

import VrIframe from "./VrIframe";
import VrExplain from "./VrExplain";

// STYLES
const StyledBox = styled(Stack)(({ theme }) => ({
  padding: 30,
  gap: 10,
  color: theme.palette.text.secondary,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    padding: "10px 30px",
  },
}));

const VrTours = ({ left, right }) => {
  return (
    <StyledBox flexDirection={left ? "row" : "row-reverse"}>
      <VrExplain />
      <VrIframe />
    </StyledBox>
  );
};

export default VrTours;
