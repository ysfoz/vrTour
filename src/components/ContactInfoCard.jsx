import {
  Box,
  Container,
  IconButton,
  Paper,
  Stack,
  Typography,
  styled,
  Link,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";


// STYLES 
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
  width: 80,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",

  [theme.breakpoints.down("md")]: {
    marginBottom: 20,
    width: "100%",
    height: "85%",
  },
  "& > :not(style)": {
    width: "80%",
    height: "85%",
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  "& > :hover": { color: "#006064" },
}));

const ContactInfoCard = () => {
  return (
    <StyledBox >
      <Paper elevation={3} sx={{ paddingBlock: 5 }}>
        <Container>
          <Typography variant="h5" textAlign={"center"} mb={3}>
            Erreichen Sie uns
          </Typography>
          <Stack spacing={2} direction="row" justifyContent="center">
            <ContactItem>
              <Link href="mailto:ysfozturk3@gmail.com">
                <StyledIconButton>
                  <EmailIcon color="error" sx={{ fontSize: 40 }} />
                </StyledIconButton>
              </Link>
              <Typography>Email</Typography>
            </ContactItem>
            <ContactItem>
              <Link href="tel:+4915229935760">
                <StyledIconButton>
                  <LocalPhoneIcon color="primary" sx={{ fontSize: 40 }} />
                </StyledIconButton>
              </Link>
              <Typography>Telefon</Typography>
            </ContactItem>

            <ContactItem>
              <Link
                href="https://wa.me/+4915229935760"
                class="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledIconButton>
                  <WhatsAppIcon
                    sx={{ fontSize: 40, color: "rgb(37, 211, 102)" }}
                  />
                </StyledIconButton>
              </Link>
              <Typography>Whatsapp</Typography>
            </ContactItem>
          </Stack>
        </Container>
        <Container>
          <Typography variant="h5" textAlign="center" margin={3}>
            Erreichbarkeit
          </Typography>

          <Stack  spacing={2}>
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
    </StyledBox>
  );
};

export default ContactInfoCard;
