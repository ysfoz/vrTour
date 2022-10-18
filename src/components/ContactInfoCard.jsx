import { IconButton, Paper } from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from '@mui/icons-material/Email';


const ContactInfoCard = () => {
  return (
    <Paper elevation={3}>
      <a
        href="https://wa.me/+4915229935760"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton sx={{ color: "white", fontSize: 60 }}>
          <WhatsAppIcon sx={{ fontSize: 60, color: "rgb(37, 211, 102)" }} />
        </IconButton>
      </a>
      <a href="tel:+4915229935760">
        <IconButton sx={{ color: "white", fontSize: 60 }}>
          <LocalPhoneIcon color="primary" sx={{ fontSize: 60 }} />
        </IconButton>{" "}
      </a>
      <a href="mailto:ysfozturk3@gmail.com">
        <IconButton sx={{ color: "white", fontSize: 60 }}>
          <EmailIcon color="error" sx={{ fontSize: 60 }} />
        </IconButton>{" "}
      </a>
    </Paper>
  );
};

export default ContactInfoCard;
