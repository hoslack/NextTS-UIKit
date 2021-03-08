import { CSSReset, ThemeProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import React from "react";
import theme from "../utils/theme";

const App = ({ Component, pageProps }: AppProps): React.ReactNode => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default App;
