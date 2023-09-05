import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function RTL(props) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}
