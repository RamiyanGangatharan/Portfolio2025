import { useEffect, useState } from "react";
import "@/styles/globals.css";
import Head from "next/head";
import Header from "./components/header";
import Footer from "./components/footer";

export default function DevLog() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => { setIsClient(true);}, []);

    return (
        <>
            <Head><title>Resume</title></Head>
            <Header />
            <main
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "2rem 1rem",
                    minHeight: "83vh",
                    backgroundColor: "var(--bg-color)",
                }}
            >
                {isClient && (
                    <iframe
                        id="resume"
                        title="Ramiyan: Resume"
                        src="/img/resume.pdf"
                        style={{
                            width: "100%",
                            maxWidth: "900px",
                            height: "100%",
                            minHeight: "77vh",
                            border: "none",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                            borderRadius: "12px",
                        }}
                    />
                )}
            </main>
            <Footer />
        </>
    );
}
