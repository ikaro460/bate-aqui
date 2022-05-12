import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import { useDarkMode } from './provider/DarkMode';
import Routes from "./routes"

function App() {

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
          primary: "#fff"
        }
      })
    },
  })

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

  return (
    <div className="App">
      <ThemeProvider theme={theme} >
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
