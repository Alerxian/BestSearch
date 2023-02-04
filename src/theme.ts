import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// 自定义主题
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
