import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { boolean, number, object, string } from "yup";
import { useFormik } from "formik";
import SendIcon from '@mui/icons-material/Send';

const ContactForm = () => {
  const validationSchema = object({
    email: string("Schreiben Sie bitte Ihre Email!")
      .required("Email ist nötig!")
      .email("Email ist ungültig!"),
    name: string("Schreiben Sie bitte Ihre Name!")
      .required("Name ist nötig!"),
    phone: number("Schreiben Sie bitte Ihre Telefonnummer!"),
    firma: string("Schreiben Sie bitte Ihre Firmaname "),
    message: string("Schreiben Sie bitte Ihre Anfrage!")
      .required("Nachricht ist  nötig!"),
    securityPolicy:boolean()

   
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      firma: "",
      message: "",
      securityPolicy: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => console.log("test"),
  });

  return (
    <Box component="main" flex={1.5} padding={5} maxWidth={876}>
      <Container
        sx={{
          "& > :not(style)": { m: 2, p: 1 },
        }}
      >
        <Typography variant="h4" textAlign={"center"}>
          Anfrage Stellen!
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} >
          <TextField
            sx={{ width: "47%", margin: 1, }}
            variant="standard"
            margin="normal"
            required
            id="name"
            label="name"
            name="name"
            autoComplete="name"
            autoFocus
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            sx={{ width: "47%", margin: 1 }}
            variant="standard"
            margin="normal"
            required
            id="email"
            label="email"
            name="email"
            autoComplete="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            sx={{ width: "47%", margin: 1 }}
            variant="standard"
            margin="normal"
            id="phone"
            label="phone"
            name="phone"
            autoComplete="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
          <TextField
            sx={{ width: "47%", margin: 1 }}
            variant="standard"
            margin="normal"
            id="firma"
            label="firma"
            name="firma"
            autoComplete="firma"
            value={formik.values.firma}
            onChange={formik.handleChange}
            error={formik.touched.firma && Boolean(formik.errors.firma)}
            helperText={formik.touched.firma && formik.errors.firma}
          />
          <TextField
            sx={{ margin: 1, width:"97%" }}
            variant="standard"
            margin="normal"
            id="message"
            label="nachricht"
            name="message"
            fullWidth
            required
            multiline
            maxRows={5}
            autoComplete="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />

          <FormControlLabel
            sx={{ margin: 1}}
            control={<Checkbox value="remember" color="primary" />}
            label="Ich habe die Datenschutzerklärung zur Kenntnis genommen. Ich stimme zu, dass meine Angaben und Daten zur Beantwortung meiner Anfrage elektronisch erhoben und gespeichert werden."
          />
          <Button
            type="submit"
           endIcon={<SendIcon/>}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Nachricht senden
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactForm;