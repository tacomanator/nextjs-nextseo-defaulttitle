import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <>
        <h1>Home</h1>
        <Link href="/child">Child</Link>
      </>
    </Layout>
  );
}
