import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <DefaultSeo {...SEO} />
    </>
  );
}

export default MyApp;
