import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1e88e5', // أزرق ملكي قوي
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff6f00', // برتقالي عصري لكن أعمق
      contrastText: '#ffffff',
    },
    success: {
      main: '#43a047', // أخضر مريح للعين
      contrastText: '#ffffff',
    },
    error: {
      main: '#e53935', // أحمر أكثر تناسقًا مع dark mode
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ffa000',
      contrastText: '#000000',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e', // تباين بسيط يعطي عمق للعناصر
    },
    text: {
      primary: '#e0e0e0', // أبيض خافت مناسب للعين
      secondary: '#90caf9', // أزرق فاتح يعطي بُعد
    },
  },
  typography: {
    fontFamily: '"Cairo", "Roboto", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h2: {
      fontSize: '2.8rem',
      fontWeight: 700,
      color: '#ff6f00',
      textAlign: 'center',
      letterSpacing: '-0.5px',
    },
    h6: {
      fontSize: '1.1rem',
      color: '#ffa726',
      textAlign: 'center',
      marginTop: '12px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
          textTransform: 'none',
          padding: '10px 22px',
          fontSize: '1rem',
          backgroundColor: '#1e88e5',
          color: '#fff',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#1565c0',
            boxShadow: '0 6px 14px rgba(0,0,0,0.25)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '16px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#1e88e5',
            },
            '&:hover fieldset': {
              borderColor: '#1565c0',
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
          '&:hover': {
            backgroundColor: '#2c2c2c',
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
  },
});

export default Theme;
