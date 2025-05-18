import React, { useRef, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  useTheme,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const MotionBox = motion(Box);

const ContactForm = () => {
  const theme = useTheme();
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSend = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // استبدلها بمعرف الخدمة من EmailJS
        "YOUR_TEMPLATE_ID", // استبدلها بمعرف القالب من EmailJS
        form.current,
        "YOUR_PUBLIC_KEY" // استبدلها بمفتاحك العام من EmailJS
      )
      .then(
        (result) => {
          setSuccess(true);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          setSuccess(false);
          setLoading(false);
        }
      );
  };

  return (
    <Box
      component="form"
      ref={form}
      onSubmit={handleSend}
      sx={{
        p: 4,
        flex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: theme.palette.background.default,
      }}
    >
      <Typography variant="h4" mb={3} align="center">
        Contact Me
      </Typography>
      {success === true && (
        <Alert severity="success">تم إرسال رسالتك بنجاح!</Alert>
      )}
      {success === false && (
        <Alert severity="error">حدث خطأ أثناء الإرسال. حاول مرة أخرى.</Alert>
      )}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        flexDirection="column"
      >
        <Grid item xs={12}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <TextField
              fullWidth
              label="Name"
              name="user_name"
              variant="outlined"
              required
            />
          </MotionBox>
        </Grid>
        <Grid item xs={12}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
          >
            <TextField
              fullWidth
              label="Email"
              name="user_email"
              type="email"
              variant="outlined"
              required
            />
          </MotionBox>
        </Grid>
        <Grid item xs={12}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7 }}
          >
            <TextField
              fullWidth
              label="Message"
              name="message"
              variant="outlined"
              multiline
              rows={4}
              required
            />
          </MotionBox>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <MotionBox
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              variant="contained"
              size="large"
              type="submit"
              disabled={loading}
            >
              {loading ? "جاري الإرسال..." : "Send"}
            </Button>
          </MotionBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
