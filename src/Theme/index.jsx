import { createTheme } from '@mui/material';
import { useDarkMode } from '../provider/DarkMode';



export default function Theme() {

  const { darkMode } = useDarkMode()

  const theme = createTheme({
    palette: {
      ...(darkMode ? {
        mode: "dark",
        // primary: {
        //   main: "#fff",
        //   contrastText: '#000',
        // },
        // secondary: {
        //   main: "#000",
        // }
      }:{
        mode: "light",
        primary: {
          main: "#0288D1",
          light: '#03A9F4',
          dark: "#01579B",
          contrastText: '#fff',
        },
        secondary: {
          main: "#E64A19",
          light: '#FF5722',
          dark: "#BF360C",
          contrastText: '#fff',
        },
        text: {
          primary: "#fff",
          secondary: "#000"
        },
        tableRowContrast: "#F7F6FE"
      })
    },
    typography: {
      fontFamily: [
        "Roboto",
        "Montserrat",
        "Sans-serif",
      ].join(","),
      h1: {
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: "48px",
        '@media (max-width:600px)': {
          fontSize: "38px",
        },
      },
      h2: {
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: "40px",
        '@media (max-width:600px)': {
          fontSize: "32px",
        },        
      },
      h3: {
        fontFamily: "Montserrat",
        fontWeight: "500",
        fontSize: "40px",
        '@media (max-width:600px)': {
          fontSize: "32px",
        },        
      },
      h4: {
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: "24px",
        '@media (max-width:600px)': {
          fontSize: "19.2px",
        },        
      },
      h5: {
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: "16px",
        '@media (max-width:600px)': {
          fontSize: "12.8px",
        },        
      },
      h6: {
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: "14px",
        '@media (max-width:600px)': {
          fontSize: "11.2px",
        },        
      },
      subtitle1: {
        fontFamily: "Montserrat",
        fontWeight: "500",
        fontSize: "20px",
        '@media (max-width:600px)': {
          fontSize: "16px",
        },     
      },
      tableTitle: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: "14px",
        '@media (max-width:600px)': {
          fontSize: "11.2px",
        },          
      },
      tableSubTitle: {
        fontFamily: "Montserrat",
        fontWeight: "500",
        fontSize: "14px",
        '@media (max-width:600px)': {
          fontSize: "11.2px",
        },          
      },
      tableStatus: {
        fontFamily: "Montserrat",
        fontWeight: "500",
        fontSize: "12px",
        '@media (max-width:600px)': {
          fontSize: "9.6px",
        },          
      },
    }
  })
  
    {/*
    font-size 48    roboto 400  h *
    font-size 40    roboto 400 * / montserrat 500
    font-size 24    roboto 400  h *
    font-size 20    montserrat 500 subtitle
    font-size 16    roboto 400  h *
    font-size 14    roboto 400  h *
  
          ***  table  ***
  
    font-size 14    montserrat 700
    font-size 14    montserrat 500
  
    font-size 12
  */}
  
  theme.components = {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#fff",
        }
      }
    }
  }
  
  // console.log(theme)

  return theme

}