import React from "react";
import Head from "next/head";
import RMD from "react-markdown";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

import '../content/mdstyles.css';

export default function MarkdownPage({ title, article }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            <main className="container mt-5 mb-5">
                <div className="bg-dark text-light p-5 rounded shadow">
                    <div className="markdown-body">
                        <RMD>{article}</RMD>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
