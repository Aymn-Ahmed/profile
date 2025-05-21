import React from 'react';
import { Box, Paper } from '@mui/material';
import AboutMeText from './AboutMeText';
import AboutMeImage from './AboutMeImage';

function AboutMeMain() {
  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh',
        px: 3,
        py: 10,
        display: 'flex',
        padding:5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <Paper
        elevation={4}
        sx={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'background.paper', // استخدام لون الخلفية الورقي من الثيم
          borderRadius: '20px',
          padding: { xs: 4, md: 8 },
          display: 'flex',
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 6,
          zIndex: 1,
          width: '100%',
          maxWidth: '1100px',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <AboutMeImage />
        </Box>

        <Box sx={{ flex: 2 }}>
          <AboutMeText />
        </Box>
      </Paper>
    </Box>
  );
}

export default AboutMeMain;
