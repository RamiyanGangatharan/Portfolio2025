import Head from "next/head";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head><title>Rami&apos;s Portfolio</title></Head>
      <Header />
      <main className="container px-3 px-md-5 d-flex flex-column align-items-center text-center">
        <div className="text-white bg-dark shadow-lg border-0 p-4 p-md-5 mb-4 mt-4 rounded w-100">
  
        <h2 className="fw-bold" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}>
          I BUILD REAL SYSTEMS.
        </h2>
          <hr className="w-50 mx-auto opacity-25" />

          <p className="mt-3 fw-semibold text-uppercase text-white">Real-time • Full-stack • Multithreaded • Scalable</p>
          <p className="mt-4 text-white fw-bold fst-italic">Ramiyan Gangatharan</p>

          <div className="mt-4 d-flex flex-column flex-md-row justify-content-center gap-3 w-100">
            <Link href="/projects" className="btn btn-outline-light w-md-auto">
              View Projects
            </Link>
            <Link href="/resume" className="btn btn-outline-light w-md-auto">
              View Resume
            </Link>
          </div>

          <p className="mt-5 text-white underline">Contact Me</p>

          <hr className="w-25 mx-auto opacity-50" />

          <div className="d-flex justify-content-center gap-4 mt-4 mb-4 fs-3 fs-md-1">
            <a
              href="mailto:ramiyan2185@gmail.com"
              className="text-white icon-hover"><FontAwesomeIcon icon={faEnvelope} size="2x"/>
            </a>
            <a href="https://www.linkedin.com/in/ramiyan/" target="_blank" rel="noopener noreferrer" className="text-white icon-hover">
              <FontAwesomeIcon icon={faLinkedin} size="2x"/>
            </a>
            <a href="https://github.com/RamiyanGangatharan" target="_blank" rel="noopener noreferrer" className="text-white icon-hover">
              <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>
          </div>
          <p className="mt-4 text-white-50 lead">Open to Opportunities</p>
        </div>

        {/* PROJECTS SECTION */}
        <div className="text-white bg-dark shadow-lg border-0 p-4 p-md-5 mb-4 mt-4 rounded w-100">
        <h2 className="fw-bold fs-2 fs-md-1">FeaturedProjects</h2>
        <hr className="w-50 mx-auto opacity-25" />

        <div className="card bg-light border-0 shadow-lg mb-3 mt-3">
          <div className="card-body text-start">

            <h3 className="text-dark fw-bold fs-5 fs-md-3">
              TabletopSync Chat System
            </h3>

            <p className="text-dark fw-semibold fst-italic small mb-2">
              Real-time Multithreaded Chat Application
            </p>

            <div className="mb-2 d-flex flex-wrap gap-2">
              <span className="badge bg-dark">Java</span>
              <span className="badge bg-dark">Sockets</span>
              <span className="badge bg-dark">Multithreading</span>
              <span className="badge bg-dark">MVC</span>
            </div>

            <ul className="ps-3 text-dark mb-0">
              <li>Built a real-time client-server chat system using Java sockets</li>
              <li>Handled concurrent users with multithreading</li>
              <li>Structured using MVC for scalability</li>
              <li>Implemented command handling (/users, /quit)</li>
            </ul>

          </div>
        </div>

        <Link href="/projects" className="btn btn-outline-light w-md-auto">
              View More Projects
            </Link>
      </div>

        <div className="text-white bg-dark shadow-lg border-0 p-4 p-md-5 mb-4 mt-4 rounded w-100">
          <h2 className="fw-bold fs-2 fs-md-1">Experience</h2>
          <hr className="w-50 mx-auto opacity-25" />

          {/* MRCS */}
          <div className="card bg-light border-0 shadow-lg mb-3 mt-3">
            <div className="card-body text-start">

              <h3 className="text-dark fw-bold fs-5 fs-md-3">
                The Mixed Reality Capture Studio
              </h3>

              <p className="text-dark fw-semibold fst-italic small mb-1">
                Research Assistant: Designer & Developer Intern
              </p>

              <p className="text-muted small mb-2">
                April - May 2025 | Durham College
              </p>

              <ul className="ps-3 text-dark mb-0">
                <li>
                  Developed a Unity-based AI assistant using local LLMs
                  <ul className="ps-3">
                    <li>Integrated voice dictation and text-to-speech via FastAPI</li>
                    <li>Built real-time speech-to-AI interaction pipeline</li>
                    <li>Prototyped conversational systems for VR/XR</li>
                  </ul>
                </li>

                <li className="mt-2">
                  Built a Souls-like 3D game
                  <ul className="ps-3">
                    <li>Implemented movement, camera, and combat systems</li>
                    <li>Focused on responsive gameplay and immersion</li>
                    <li>Worked with animations, collisions, and abilities</li>
                  </ul>
                </li>
              </ul>

            </div>
          </div>

          {/* Freelance */}
          <div className="card bg-light border-0 shadow-lg mb-3 mt-3">
            <div className="card-body text-start">

              <h3 className="text-dark fw-bold fs-5 fs-md-3">
                Freelance Software Consultant
              </h3>

              <p className="text-muted small mb-2">
                January 2023 - Present | Hybrid
              </p>

              <ul className="ps-3 text-dark mb-2">
                <li>Provided code reviews and software architecture guidance</li>
                <li>Improved performance, structure, and maintainability</li>
              </ul>

              <p className="fw-semibold text-dark mb-1">Notable Projects</p>
              <ul className="ps-3 text-dark mb-0">
                <li>FILMASH – Indie movie discovery app</li>
                <li>KIBATI Auto Shop – E-commerce storefront</li>
              </ul>

            </div>
          </div>

          {/* Tutor */}
          <div className="card bg-light border-0 shadow-lg mb-3 mt-3">
            <div className="card-body text-start">

              <h3 className="text-dark fw-bold fs-5 fs-md-3">
                Programming Tutor
              </h3>

              <p className="text-dark fw-semibold fst-italic small mb-1">
                Private Tutor
              </p>

              <p className="text-muted small mb-2">
                September 2023 - April 2025 | Hybrid
              </p>

              <ul className="ps-3 text-dark mb-0">
                <li>Taught C#, Java, Python, SQL, and web development</li>
                <li>Adapted lessons to individual learning styles</li>
                <li>Strengthened students’ problem-solving skills</li>
              </ul>

            </div>
          </div>

          {/* Tim Hortons */}
          <div className="card bg-light border-0 shadow-lg mb-3 mt-3">
            <div className="card-body text-start">

              <h3 className="text-dark fw-bold fs-5 fs-md-3">
                Tim Hortons
              </h3>

              <p className="text-muted small mb-2">
                November 2021 - Present | Various Locations
              </p>

              <ul className="ps-3 text-dark mb-0">

                <li>
                  <strong>Shift Supervisor</strong>
                  <ul className="ps-3">
                    <li>Led teams of 3–12 employees</li>
                    <li>Managed operations and service quality</li>
                    <li>Handled cash and inventory</li>
                  </ul>
                </li>

                <li className="mt-2">
                  <strong>Team Lead</strong>
                  <ul className="ps-3">
                    <li>Assisted in training and scheduling</li>
                    <li>Supported daily operations</li>
                  </ul>
                </li>

                <li className="mt-2">
                  <strong>Team Member</strong>
                  <ul className="ps-3">
                    <li>Worked in high-volume environment</li>
                    <li>Maintained quality and efficiency</li>
                  </ul>
                </li>

              </ul>

            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}