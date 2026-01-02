import Head from "next/head";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

export default function Services() {
    return ( 
        <>
            <head><title>RG Tech Services</title></head>
            <Header />
                <main className="container my-5">
                    <h1 className="display-3 text-center text-white">Services</h1>
                    <hr className="mb-4 text-white" />
                    <section class="hero-section">
                        <div className="hero-content bg-dark text-light rounded p-5">
                            <h1>I fix computers properly.</h1>
                            <p>Diagnostics, repairs, upgrades, and custom PC work. <br/> no guesswork, no shortcuts.</p>
                            <a href="#" className="cta-button">Request a Job</a>
                        </div>
                    </section>
                </main>
            <Footer />
        </>
    );
}