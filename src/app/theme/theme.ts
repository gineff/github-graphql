import { createTheme, Theme } from '@mui/material/styles';

export const majesticPurple = '#6B32E7';
export const vividBurgundy = '#84103B';
export const deepIndigo = '#3C1C81';
export const headerHeightLg = '113px';
export const headerHeightXs = '64px';
const backgroundColor = '#010101';

const mixinFont16 = {
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '19.36px',
};

export const theme: Theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  palette: {
    text: {
      primary: '#828282',
    },
    background: {
      paper: '#100E17',
      default: '#FFF',
    },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          padding: '9px 16px',
          color: '#828282',
          backgroundColor: '#f2f2f2',
          borderRadius: '4px',
          fontSize: '14px',
          fontStyle: 'italic',
          fontWeight: 400,
          lineHeight: '24px',
          letterSpacing: '0.17px',

          '&::after': {
            borderBottomColor: 'transparent!important',
          },
          '&::before': {
            borderBottomColor: 'transparent!important',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '8px 22px',
          fontWeight: 500,
          fontSize: '15px',
          lineHeight: '26px',
          letterSpacing: '0.46px',
          backgroundColor: '#2196f3',
        },
      },
    },
  },
});
