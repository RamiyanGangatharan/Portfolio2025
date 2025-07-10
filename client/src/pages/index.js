import "@/styles/globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import About from "./components/about";

export default function Home() 
{
  return (
    <><head><title>Rami's Portfolio</title></head> 
      <Header />
      <main className="container mt-5">
        <About/>
      </main>
      <Footer />
    </>
  );
}
