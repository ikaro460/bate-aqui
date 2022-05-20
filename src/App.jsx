import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { createTheme, SpeedDial, ThemeProvider } from "@mui/material";
import "./App.css";
import { useDarkMode } from "./provider/DarkMode";
import Routes from "./routes";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
    const { darkMode, toggleDarkMode } = useDarkMode();

    const theme = createTheme({
        palette: {
            ...(darkMode
                ? {
                      mode: "dark",
                      primary: {
                          main: "#444",
                          light: "#E6E6E6",
                          dark: "#3B3B3B",
                          contrastText: "#fff",
                      },

                      secondary: {
                          main: "##E6E6E6",
                          light: "#3B3B3B",
                          dark: "#3B3B3B",
                          contrastText: "#fff",
                      },
                      text: {
                          primary: "#E6E6E6",
                          secondary: "#E6E6E6",
                          subtitle: "#ccc",
                          button: "#E6E6E6",
                      },
                      background: {
                          primary: "#1A1A1A",
                          secondary: "#000",
                      },
                      tableRowContrast: "#1A1A1A",
                  }
                : {
                      mode: "light",
                      primary: {
                          main: "#0288D1",
                          light: "#03A9F4",
                          dark: "#01579B",
                          contrastText: "#fff",
                      },
                      secondary: {
                          main: "#E64A19",
                          light: "#FF5722",
                          dark: "#BF360C",
                          contrastText: "#fff",
                      },
                      text: {
                          primary: "#000",
                          secondary: "#fff",
                          subtitle: "#4B4B4B",
                          button: "#0288D1",
                      },
                      background: {
                          primary: "#fff",
                          secondary: "#000",
                      },
                      tableRowContrast: "#F7F6FE",
                      notOnTime: "#4B4B4B"
                  }),
        },
        typography: {
            fontFamily: ["Roboto", "Montserrat", "Sans-serif"].join(","),
            titulo: {
                fontFamily: "Roboto",
                fontWeight: "400",
                fontSize: "48px",
                "@media (max-width:600px)": {
                    fontSize: "20px",
                },
            },
            h2: {
                fontFamily: "Roboto",
                fontWeight: "400",
                fontSize: "40px",
                "@media (max-width:600px)": {
                    fontSize: "32px",
                },
            },
            h3: {
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "40px",
                "@media (max-width:600px)": {
                    fontSize: "32px",
                },
            },
            h4: {
                fontFamily: "Roboto",
                fontWeight: "400",
                fontSize: "24px",
                "@media (max-width:600px)": {
                    fontSize: "19.2px",
                },
            },
            h5: {
                fontFamily: "Roboto",
                fontWeight: "400",
                fontSize: "16px",
                "@media (max-width:600px)": {
                    fontSize: "12.8px",
                },
            },
            h6: {
                fontFamily: "Roboto",
                fontWeight: "400",
                fontSize: "14px",
                "@media (max-width:600px)": {
                    fontSize: "11.2px",
                },
            },
            subtitle1: {
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "20px",
                "@media (max-width:600px)": {
                    fontSize: "16px",
                },
            },
            subtitle2: {
                fontFamily: "Roboto",
                fontWeight: "400",
                fontSize: "12px",
                "@media (max-width:600px)": {
                    fontSize: "9.6px",
                },
            },
            tableTitle: {
                fontFamily: "Montserrat",
                fontWeight: "700",
                fontSize: "14px",
                "@media (max-width:600px)": {
                    fontSize: "11.2px",
                },
            },
            tableSubTitle: {
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "14px",
                "@media (max-width:600px)": {
                    fontSize: "11.2px",
                },
            },
            tableStatus: {
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "12px",
                "@media (max-width:600px)": {
                    fontSize: "9.6px",
                },
            },
        },
    });

    theme.components = {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: "#A4A9AF",
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.primary,
                },
            },
        },
    };

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Routes />
                    <SpeedDial
                        ariaLabel="SpeedDial basic example"
                        sx={{ position: "fixed", bottom: 16, right: 16 }}
                        icon={darkMode ? <DarkModeIcon /> : <LightModeIcon />}
                        onClick={toggleDarkMode}
                    />
                </LocalizationProvider>
            </ThemeProvider>
            <ToastContainer />
        </div>
    );
}

export default App;
