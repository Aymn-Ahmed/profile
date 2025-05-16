
import React from 'react';
import { Box } from '@mui/material';
import { keyframes } from '@emotion/react';
import profileImg from '../../assets/aymn.jpg';

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;

function AboutMeImage() {
  return (
    <Box
      sx={{
        width: 250,
        height: 250,
        borderRadius: '50%',
        overflow: 'hidden',
        border: '6px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 0 30px rgba(30,136,229,0.5)', // غيّر لون الظل ليتماشى مع اللون الأساسي في الثيم
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: `${fadeInUp} 1s ease forwards`,
        opacity: 0,
      }}
    >
      <Box
        component="img"
        src={profileImg}
        alt="About me"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '50%',
        }}
      />
    </Box>
  );
}

export default AboutMeImage;
