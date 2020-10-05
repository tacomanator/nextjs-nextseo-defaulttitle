import Link from "next/link";
import Layout from "../components/Layout";

export default function Sitemap() {
  return (
    <Layout title="Child">
      <>
        <h1>Child</h1>
        <Link href="/">Home</Link>
      </>
    </Layout>
  );
}
