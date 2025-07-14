import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as SolidIcons from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <div className="px-3 py-2 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
              <h1>RG.</h1>
            </Link>
            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <Link href="/" className="nav-link text-center text-white">
                  <FontAwesomeIcon icon={SolidIcons.faHouse} className="d-block mx-auto mb-1" size="lg" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="nav-link text-white text-center">
                  <FontAwesomeIcon icon={SolidIcons.faFolderOpen} className="d-block mx-auto mb-1" size="lg" />
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/resume" className="nav-link text-white text-center">
                  <FontAwesomeIcon icon={SolidIcons.faFileAlt} className="d-block mx-auto mb-1" size="lg" />
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/contact" className="nav-link text-white text-center">
                  <FontAwesomeIcon icon={SolidIcons.faEnvelope} className="d-block mx-auto mb-1" size="lg" />
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/devlog" className="nav-link text-white text-center">
                  <FontAwesomeIcon icon={SolidIcons.faCodeBranch} className="d-block mx-auto mb-1" size="lg" />
                  Dev Log
                </Link>
              </li>
              <li>
                <a href="https://portfolio2025-g7wk.onrender.com/" className="nav-link text-white text-center" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={SolidIcons.faServer} className="d-block mx-auto mb-1" size="lg" />
                  SERVER
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
