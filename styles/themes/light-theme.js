import { Roboto } from '@next/font/google';
import { createTheme } from '@mui/material/styles';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#74B861',
    },
    secondary: {
      main: '#F09233',
    },
    contrastThreshold: 7,
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default lightTheme;
