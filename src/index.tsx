import "./index.css";

import ReactDOM from "react-dom/client";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";

import App from "./App";
import theme from "./themes/theme";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </CacheProvider>
);
