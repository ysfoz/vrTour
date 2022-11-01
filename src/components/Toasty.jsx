import { Typography, Paper, styled } from "@mui/material";

const Toasty = ({ toastyMessage }) => {
  // STYLES
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    backgroundColor: toastyMessage.success ? "#a7ffeb" : "#fce4ec",
    position: "fixed",
    bottom: 20,
    left: 10,
    height: 50,
    display: !toastyMessage.message ? "none" : "flex",
    alignItems: "center",
    paddingInline: toastyMessage.message && 10,
  }));

  return (
    <Item elevation={12}>
      <Typography>{toastyMessage.message}</Typography>
    </Item>
  );
};

export default Toasty;
