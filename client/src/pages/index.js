import Head from "next/head";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import About from "./components/about";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rami&apos;s Portfolio</title>
      </Head>
      <Header />
      <main className="container mt-5">
        <About />
      </main>
      <Footer />
    </>
  );
}
