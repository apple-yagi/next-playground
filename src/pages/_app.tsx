import "tailwindcss/tailwind.css";
import { GlobalStyles } from "twin.macro";
import Head from "next/head";
import NextNprogress from "nextjs-progressbar";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/styles/vars";
import { Header } from "@components/layout/Header";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <GlobalStyles />
      <NextNprogress />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
