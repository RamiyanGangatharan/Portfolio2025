import "@/styles/globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Introduction from "./components/introduction";
import About from "./components/about";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mt-5">
        <Introduction/>
        <About/>
      </main>
      <Footer />
    </>
  );
}
