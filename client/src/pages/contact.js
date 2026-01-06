"use client";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

export default function Contact() {
  const email = "ramiyan2185@gmail.com";

  return (
    <>
      <Header />
      <main className="container my-5">
        <div className="d-flex justify-content-center">
          <div
            className="w-100 w-md-75 w-lg-75 p-5 rounded shadow bg-dark text-light text-center"
            style={{ marginBottom: "10%" }}
          >
            <h1 className="display-5 mb-4">Contact Me</h1>
            <hr />
            <p className="lead my-4">
              I've removed the contact form for simplicity. I am currently working on a new implementation. You can email me directly:
            </p>
            <a
              href={`mailto:${email}`}
              className="btn btn-outline-light btn-lg"
            >
              Email Me
            </a>
            <p className="mt-4 small text-light">
              I usually respond within 24 hours. Looking forward to hearing from you! 🙂
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
