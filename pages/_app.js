import GlobalStyle from "../styles";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PlantPal</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
