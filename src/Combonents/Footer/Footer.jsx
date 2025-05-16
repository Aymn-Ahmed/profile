import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Stack,
  useTheme,
  Tooltip,
} from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import { motion } from "framer-motion";

const MotionIconButton = motion(IconButton);

const socialLinks = [
  {
    icon: <GitHub />,
    label: "GitHub",
    href: "https://github.com/Aymn-Ahmed",
    motion: { rotate: 5 },
  },
  {
    icon: <LinkedIn />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/aymen-alrjwy",
    motion: { rotate: -5 },
  },
  {
    icon: <Email />,
    label: "Send Email",
    href: "mailto:aymnahmedalrjawy@gmail.com",
    motion: { y: -4 },
  },
];

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: "auto",
        textAlign: "center",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
        {socialLinks.map(({ icon, label, href, motion }) => (
          <Tooltip title={label} arrow key={label}>
            <MotionIconButton
              href={href}
              target="_blank"
              color="inherit"
              whileHover={{ scale: 1.2, ...motion }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {icon}
            </MotionIconButton>
          </Tooltip>
        ))}
      </Stack>

      <Typography variant="body2" sx={{ opacity: 0.7 }}>
        © {new Date().getFullYear()} Ayman Ahmed — All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
