import Head from "next/head";
import { NextSeo } from "next-seo";

function Layout({ children, title }) {
  return (
    <>
      <NextSeo title={title} />
      <Head />

      {children}
    </>
  );
}

export default Layout;
