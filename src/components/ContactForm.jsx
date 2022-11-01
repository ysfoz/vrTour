import { useRef } from "react";
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  Container,
  styled,
} from "@mui/material";
import { boolean, number, object, string } from "yup";
import { useFormik } from "formik";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";

// STYLES
const StyledInput = styled(TextField)(({ theme }) => ({
  marginRight: 5,
  width: "48%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const ContactForm = ({ setToastyMessage }) => {
  const form = useRef();

  const validationSchema = object({
    email: string("Schreiben Sie bitte Ihre Email!")
      .required("Email ist nötig!")
      .email("Email ist ungültig!"),
    name: string("Schreiben Sie bitte Ihre Name!").required("Name ist nötig!"),
    phone: number("Schreiben Sie bitte Ihre Telefonnummer!"),
    firma: string("Schreiben Sie bitte Ihre Firmaname "),
    message: string("Schreiben Sie bitte Ihre Anfrage!").required(
      "Nachricht ist  nötig!"
    ),
    securityPolicy: boolean(),
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
    onSubmit: (values, actions) => {
      if (values.securityPolicy) {
        emailjs
          .send(
            process.env.REACT_APP_FORMIK_SERVICE_ID,
            process.env.REACT_APP_FORMIK_TEMPLATE_ID,
            values,
            process.env.REACT_APP_PUBLIC_KEY
          )
          .then(
            (result) => {
              setToastyMessage({
                success: true,
                message: "Der Nachricht wurde geschickt!",
              });
              actions.setSubmitting(false);
              actions.resetForm();
              setTimeout(() => {
                setToastyMessage({});
              }, 5000);
            },
            (error) => {
              console.log(error.text);
            }
          );
      } else {
        setToastyMessage({
          success: false,
          message: "Der Nachricht konnte nicht geschickt werden!",
        });
        actions.setSubmitting(false);
        setTimeout(() => {
          setToastyMessage({});
        }, 5000);
      }
    },
  });

  return (
    <Box component="main" flex={1.5} padding={1}>
      <Container
        sx={{
          "& > :not(style)": { m: 2, p: 1 },
        }}
      >
        <Typography variant="h4" textAlign={"center"}>
          Anfrage Stellen!
        </Typography>
        <Box component="form" ref={form} onSubmit={formik.handleSubmit}>
          <StyledInput
            variant="standard"
            margin="normal"
            required
            id="name"
            type={"text"}
            label="name"
            name="name"
            autoComplete="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <StyledInput
            variant="standard"
            margin="normal"
            required
            type={"email"}
            id="email"
            label="email"
            name="email"
            autoComplete="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <StyledInput
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
          <StyledInput
            variant="standard"
            margin="normal"
            id="firma"
            label="firma"
            type={"text"}
            name="firma"
            autoComplete="firma"
            value={formik.values.firma}
            onChange={formik.handleChange}
            error={formik.touched.firma && Boolean(formik.errors.firma)}
            helperText={formik.touched.firma && formik.errors.firma}
          />
          <TextField
            variant="standard"
            margin="normal"
            id="message"
            type={"text"}
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
            defaultValue={false}
            id="securityPolicy"
            name="securityPolicy"
            sx={{ margin: 1, fontSize: "12px" }}
            m={1}
            onChange={formik.handleChange}
            control={
              <Checkbox
                value={formik.values.securityPolicy}
                color="primary"
                checked={formik.values.securityPolicy ? true : false}
                size={"small"}
              />
            }
            label={
              <Typography variant="body3" color="textSecondary">
                Ich habe die Datenschutzerklärung zur Kenntnis genommen. Ich
                stimme zu, dass meine Angaben und Daten zur Beantwortung meiner
                Anfrage elektronisch erhoben und gespeichert werden.
              </Typography>
            }
          />
          <Button
            disabled={formik.isSubmitting}
            type="submit"
            endIcon={<SendIcon />}
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
