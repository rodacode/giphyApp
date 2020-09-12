import React from "react";
import { Provider } from "react-redux";
import { store } from "./reducers/";
import Home from "./pages/home/Home";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import './App.scss';

function App() {

  const font =  "'Kalam', cursive";

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: '#9C27B0',
          },
          secondary: {
            main: '#ECA400',
          },
        },
        typography: {
          fontFamily: font,
        }
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <div className="main__container" data-testid="main__container">
          <Home />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
