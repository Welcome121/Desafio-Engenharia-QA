import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: '#F0ECFE',
            main: '#8465F6',
            dark: '#4F22F2',
            contrastText: '#FFFFFF'
        },
        secondary: {
            light: '#DCF2F2',
            main: '#84C9D9',
            dark: '#55B3D9',
            contrastText: '#FFFFFF'
        },
    }
});

export default theme;