import {
  Box,
  Container,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { styled } from "@mui/material/styles";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  color: theme.palette.text.secondary,
  display: "flex",
  flexDirection: "row",
  gap: 4,
  alignItems: "center",
}));
const ContactItem = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  color: theme.palette.text.secondary,
  display: "flex",
  flexDirection: "column",
  gap: 4,
  alignItems: "center",
  width:80
}));

const ContactInfoCard = () => {
  return (
    <Paper elevation={3}>
      <Container>
        <Typography variant="h5" textAlign={"center"} margin={3}>
          Erreichen Sie uns
        </Typography>
        <Stack spacing={2} direction="row"  justifyContent="center">
        <ContactItem>
            <a href="mailto:ysfozturk3@gmail.com">
              <IconButton sx={{ "& > :hover": { color: "#006064" } }}>
                <EmailIcon color="error" sx={{ fontSize: 40 }} />
              </IconButton>
            </a>
            <Typography>Email</Typography>
          </ContactItem>
          <ContactItem>
            <a href="tel:+4915229935760">
              <IconButton sx={{ "& > :hover": { color: "#006064" } }}>
                <LocalPhoneIcon color="primary" sx={{ fontSize: 40 }} />
              </IconButton>
            </a>
            <Typography>Telefon</Typography>
          </ContactItem>
         
          <ContactItem>
            <a
              href="https://wa.me/+4915229935760"
              class="whatsapp_float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton sx={{ "& > :hover": { color: "#006064" } }}>
                <WhatsAppIcon
                  sx={{ fontSize: 40, color: "rgb(37, 211, 102)" }}
                />
              </IconButton>
            </a>
            <Typography>Whatsapp</Typography>
          </ContactItem>
        </Stack>
      </Container>
      <Container>
        <Typography variant="h5" textAlign={"center"} margin={3}>
          Erreichbarkeit
        </Typography>

        <Stack spacing={2}>
          <Item>
            <AccessTimeIcon />
            <Typography>Montag - Freitag: 09:00 bis 17:00 Uhr</Typography>
          </Item>
          <Item>
            <AccessTimeIcon />
            <Typography>Wochenende: geschlossen</Typography>
          </Item>
          <Item>
            <AccessTimeIcon />
            <Typography>Schreiben Sie einfach, antworten wir!!</Typography>
          </Item>
        </Stack>
      </Container>
      
    </Paper>
  );
};

export default ContactInfoCard;
