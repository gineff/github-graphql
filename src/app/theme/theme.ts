import { createTheme, Theme } from '@mui/material/styles';

export const theme: Theme = createTheme({
  mixins: {
    centred: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 400,
      lineHeight: 1.17,
      padding: '24px 32px',
    },
  },
  palette: {
    text: {
      primary: 'rgb(0, 0, 0, 0.87)',
    },
    background: {
      paper: '#FFF',
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
    MuiTableRow: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgb(0,0,0, 0.12)',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          width: 'calc(100% / 5)',
          wordBreak: 'break-all',
        },
        head: {
          textAlign: 'left',
        },
        body: {},
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {},
      },
    },
  },
});
