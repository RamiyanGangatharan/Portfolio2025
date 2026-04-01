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
          <h2 className="display-4 fw-bold">Experience &amp; Projects</h2>
          <hr className="w-50 mx-auto opacity-25" />

          <div className="card bg-light border-0 shadow-lg mb-4 mt-4">
            <div className="card-body">
              <p className="card-title text-dark display-5">The Mixed Reality Capture Studio</p>
              <p className="card-text text-dark fw-bold fst-italic mb-2">Research Assistant: Designer &amp; Developer Intern</p>
              <p className="card-text text-dark mb-2"> [ April - May 2025 | Durham College ]</p>
              <hr className="w-75 mx-auto opacity-25" />
              <div className="ms-2">
                <ul className="text-start ms-5 text-dark">
                  <li>Developed a Unity-based AI assistant for VR/XR &amp; desktop using local LLMs</li>
                    <ul>
                      <li>Integrated voice dictation + text-to-speech with a REST pipeline using FastAPI</li>
                      <li>Built real-time speech-to-AI interaction with transcription, JSON requests, &amp; live responses</li>
                      <li>Prototyping conversational systems for immersive environments</li>
                    </ul>
                  
                  <li>Building a Souls-like 3D game</li>
                  <ul>
                    <li>Implemented player movement, camera systems, animations, abilities, &amp; collisions</li>
                    <li>Focused on responsive combat &amp; immersive level design</li>
                    <li>Strengthened skills in Unity, AI integration, &amp; cross-platform development</li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>

          <div className="card bg-light border-0 shadow-lg mb-4 mt-4">
            <div className="card-body">
              <p className="card-title text-dark display-5">Tim Hortons</p>            
              <p className="card-text text-dark mb-2"> [ November 2021 - Present | Various Locations ]</p>
              <hr className="w-75 mx-auto opacity-25" />
              <div className="ms-2">
                <ul className="text-start ms-5 text-dark">
                
                    <li>Shift Supervisor</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}