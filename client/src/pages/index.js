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
      <main className="container d-flex flex-column align-items-center justify-content-center text-center">
        <div className="text-white bg-dark shadow-lg border-0 p-5 mb-5 mt-5 rounded w-100">

          <h2 className="display-4 fw-bold">I BUILD REAL SYSTEMS.</h2>
          <hr className="w-50 mx-auto opacity-25" />

          <p className="mt-3 fw-semibold text-uppercase text-white">Real-time • Full-stack • Multithreaded • Scalable</p>
          <p className="mt-4 text-white fw-bold fst-italic">Ramiyan Gangatharan</p>

          <div className="mt-5 d-flex justify-content-center gap-3 flex-wrap">
            <Link href="/projects" className="btn btn-outline-light btn-lg px-5">View Projects</Link>
            <Link href="/resume" className="btn btn-outline-light btn-lg px-5">View Resume</Link>
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

        {/* PROJECTS SECTION */}
        <div className="text-white bg-dark shadow-lg border-0 p-5 mb-5 mt-5 rounded w-100">
          <h2 className="display-4 fw-bold">Projects</h2>
          <hr className="w-50 mx-auto opacity-25" />

          <div className="card bg-light border-0 shadow-lg mb-4 mt-4">
            <div className="card-body">
              <p className="card-title text-dark display-5">TabletopSync Chat System</p>
              <p className="card-text text-dark fw-bold fst-italic mb-2">
                Real-time Multithreaded Chat Application
              </p>
            
              <hr className="w-75 mx-auto opacity-25" />

              <div className="mb-3">
              <span className="badge bg-dark text-white me-2">Java</span>
              <span className="badge bg-dark text-white me-2">Sockets</span>
              <span className="badge bg-dark text-white me-2">Multithreading</span>
              <span className="badge bg-dark text-white">MVC</span>
            </div>
              <ul className="text-start ms-5 text-dark">
                <li>Built a client-server chat system using Java sockets</li>
                <li>Implemented multithreading for handling multiple users concurrently</li>
                <li>Designed MVC architecture for clean separation of concerns</li>
                <li>Added command handling system (e.g., /users, /quit)</li>
              </ul>
            </div>
          </div>

          <button className="btn btn-outline-light btn-lg px-5 mt-3" onClick={() => window.location.href = "/projects"}>
            View More Projects
          </button>
        </div>

        <div className="text-white bg-dark shadow-lg border-0 p-5 mb-5 mt-5 rounded w-100">
          <h2 className="display-4 fw-bold">Experience</h2>
          <hr className="w-50 mx-auto opacity-25" />

          <div className="card bg-light border-0 shadow-lg mb-4 mt-4">
            <div className="card-body">
              <p className="card-title text-dark display-5">The Mixed Reality Capture Studio</p>
              <p className="card-text text-dark fw-bold fst-italic mb-2">Research Assistant: Designer &amp; Developer Intern</p>
              <p className="card-text text-dark mb-2"> [ April - May 2025 | Durham College ]</p>
              <hr className="w-75 mx-auto opacity-25" />
              <div className="ms-2">
                <ul className="text-start ms-5 text-dark">
                  <li className="text-start ms-5 text-dark">Developed a Unity-based AI assistant for VR/XR &amp; desktop using local LLMs</li>
                    <ul className="text-start ms-5 text-dark">
                      <li>Integrated voice dictation + text-to-speech with a REST pipeline using FastAPI</li>
                      <li>Built real-time speech-to-AI interaction with transcription, JSON requests, &amp; live responses</li>
                      <li>Prototyping conversational systems for immersive environments</li>
                    </ul>
                  
                  <li className="text-start ms-5 text-dark">Building a Souls-like 3D game</li>
                  <ul className="text-start ms-5 text-dark">
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
              <p className="card-title text-dark display-5">Freelance Software Consultant</p>
              <p className="card-text text-dark mb-2">[ January 2023 - Present | Hybrid ]</p>
              <hr className="w-75 mx-auto opacity-25" />
              <div className="ms-2">
                <ul className="text-start ms-5 text-dark">
                  <li className="text-start ms-5 text-dark">I gave advice to other developers and did code reviews.</li>
                </ul>          
              </div>
              <p className="fw-bold lead">Notable Projects</p>
              <hr className="w-25 mx-auto opacity-25"></hr>
                  <ul className="text-start ms-5 text-dark">
                    <li className="text-start ms-5 text-dark">FILMASH: An indie movie application.</li>
                    <li className="text-start ms-5 text-dark">KIBATI Auto Shop: A storefront for car parts.</li>
                  </ul>
            </div>
          </div>
            

          <div className="card bg-light border-0 shadow-lg mb-4 mt-4">
            <div className="card-body">
              <p className="card-title text-dark display-5">Programming Tutor</p>
              <p className="card-text text-dark fw-bold fst-italic mb-2">Private Tutor</p>
              <p className="card-text text-dark mb-2"> [ September 2023 - April 2025 | Hybrid ]</p>
              <hr className="w-75 mx-auto opacity-25" />
              <div className="ms-2">
                <ul className="text-start ms-5 text-dark">
                  <li className="text-start ms-5 text-dark">Provide personalized programming tutoring in C#, Java, Python, SQL, and general web development</li>
                  <li className="text-start ms-5 text-dark">Tailor lessons to individual learning styles &amp; goals</li>
                  <li className="text-start ms-5 text-dark">Help students build strong coding foundations &amp; problem-solving skills</li>
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
                    <li className="text-start ms-5">Shift Supervisor</li>
                      <ul className="text-start ms-5">
                        <li>Lead teams of 3-12 employees in a fast-paced environment</li>
                        <li>Ensure high-quality customer service &amp; efficient operations</li>
                        <li>Handle cash management, inventory control, and staff</li>
                      </ul>
                      <li className="text-start ms-5">Team Lead</li>
                      <ul className="text-start ms-5">
                        <li>Intermediary position where I was an apprentice to my manager.</li>
                        <li>Assisted in training, scheduling, &amp; daily operations</li>
                        <li>Gained leadership experience &amp; operational knowledge</li>
                      </ul>     
                      <li className="text-start ms-5">Team Member/Counter Staff</li>
                      <ul className="text-start ms-5">
                        <li>Provided customer service in a high-volume setting</li>
                        <li>Prepared food &amp; beverages while maintaining quality standards</li>
                        <li>Collaborated with team members to ensure smooth operations</li>
                      </ul>                 
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