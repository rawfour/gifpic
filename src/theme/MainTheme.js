import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  overrides: {
    // Style sheet name
    MuiSvgIcon: {
      // Name of the rule
      root: {
        // Some CSS
        fontSize: '2.5rem',
      },
    },
    MuiButton: {
      root: {
        fontSize: '1.6rem',
        textTransform: 'none',
      },
    },
  },
  palette: {
    primary: {
      main: '#646ecb',
    },
    text: {
      primary: 'rgb(63, 63, 63)',
    },
  },
});
