import Head from "next/head";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <Head><title>Rami&apos;s Portfolio</title></Head>
      <Header />
      <main className="container d-flex flex-column align-items-center justify-content-center text-center">
        <div className="text-white bg-dark shadow-lg border-0 p-5 mb-5 mt-5 rounded w-100">

          <h2 className="display-4 fw-bold">I BUILD REAL SYSTEMS.</h2>
          <hr className="w-50 mx-auto opacity-25" />

          <p className="mt-3 fw-semibold text-uppercase text-white">Real-time • Full-stack • Multithreaded • Scalable</p>
          <p className="mt-4 text-white fw-bold fst-italic">Ramiyan Gangatharan</p>

          <div className="mt-5 d-flex justify-content-center gap-3 flex-wrap">
            <a href="/projects" className="btn btn-outline-light btn-lg px-5">View Projects</a>
            <a href="/resume" className="btn btn-outline-light btn-lg px-5">View Resume</a>
          </div>

          <p className="mt-5 text-white underline">Contact Me</p>

          <hr className="w-25 mx-auto opacity-50" />

          <div className="d-flex justify-content-center gap-4 mt-4 mb-4">
            <a
              href="mailto:ramiyan2185@gmail.com"
              className="text-white icon-hover"><FontAwesomeIcon icon={faEnvelope} size="3x"/>
            </a>
            <a href="https://www.linkedin.com/in/ramiyan/" target="_blank" rel="noopener noreferrer" className="text-white icon-hover">
              <FontAwesomeIcon icon={faLinkedin} size="3x"/>
            </a>
            <a href="https://github.com/RamiyanGangatharan" target="_blank" rel="noopener noreferrer" className="text-white icon-hover">
              <FontAwesomeIcon icon={faGithub} size="3x"/>
            </a>
          </div>
          <p className="mt-4 text-white-50 lead">Open to Opportunities</p>
        </div>

        <div className="text-white bg-dark shadow-lg border-0 p-5 mb-5 mt-5 rounded w-100">

        </div>

      </main>
      <Footer />
    </>
  );
}