import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0d47a1', // أزرق ملكي أنيق وعميق
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff9100', // برتقالي ذهبي عصري ومميز
      contrastText: '#ffffff',
    },
    success: {
      main: '#00c853', // أخضر نيون لطيف على الوضع الليلي
      contrastText: '#ffffff',
    },
    error: {
      main: '#d32f2f',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ffab00',
      contrastText: '#000000',
    },
    background: {
      default: '#0f0f0f', // خلفية داكنة جداً لإبراز العناصر
      paper: '#1a1a1a',   // عمق وتباين مميز
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#81d4fa',
    },
  },

  typography: {
    fontFamily: '"Cairo", "Roboto", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '3.2rem',
      fontWeight: 700,
      color: '#ff9100',
      textAlign: 'center',
      letterSpacing: '-1px',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#29b6f6',
      textAlign: 'center',
      marginBottom: '10px',
    },
    h6: {
      fontSize: '1.2rem',
      color: '#ffb74d',
      textAlign: 'center',
      marginTop: '12px',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#bdbdbd',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '25px',
          textTransform: 'none',
          padding: '10px 24px',
          fontSize: '1rem',
          background: 'linear-gradient(to right, #1e88e5, #42a5f5)',
          color: '#fff',
          boxShadow: '0 4px 15px rgba(30,136,229,0.4)',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: 'linear-gradient(to right, #1565c0, #1e88e5)',
            boxShadow: '0 6px 20px rgba(21,101,192,0.6)',
          },
          '@media (max-width:600px)': {
            fontSize: '0.85rem',
            padding: '8px 10px',
            minWidth: '80px',
            whiteSpace: 'nowrap',
          },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '18px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#3949ab',
            },
            '&:hover fieldset': {
              borderColor: '#5c6bc0',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1e88e5',
            },
          },
        },
      },
    },

    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e',
          borderRadius: '10px',
          '&:hover': {
            backgroundColor: '#2a2a2a',
          },
          '&.Mui-focused': {
            backgroundColor: '#1e1e1e',
          },
          color: '#fff',
        },
        input: {
          color: '#fff',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1f1f1f',
          borderRadius: '16px',
          boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
          padding: '20px',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          },
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0d47a1',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        },
      },
    },
  },
});

export default Theme;
