import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import theme from "./themes/theme";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
