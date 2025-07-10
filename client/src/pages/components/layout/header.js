import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import * as SolidIcons from "@fortawesome/free-solid-svg-icons"; 
import "@/styles/globals.css"; 

export default function Header() 
{ 
  return (
      <header>
        <div className="px-3 py-2 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"><h1>RG.</h1></a>
                    <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                        <li>
                            <a href="/" className="nav-link text-center text-white">
                                <FontAwesomeIcon icon={SolidIcons.faHouse} className="d-block mx-auto mb-1" size="lg" /> Home
                            </a>
                        </li>
                        <li>
                            <a href="/projects" className="nav-link text-white text-center">
                                <FontAwesomeIcon icon={SolidIcons.faFolderOpen} className="d-block mx-auto mb-1" size="lg" /> Projects
                            </a>
                        </li>
                        <li>
                            <a href="/resume" className="nav-link text-white text-center">
                                <FontAwesomeIcon icon={SolidIcons.faFileAlt} className="d-block mx-auto mb-1" size="lg" /> Resume
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="nav-link text-white text-center">
                                <FontAwesomeIcon icon={SolidIcons.faEnvelope} className="d-block mx-auto mb-1" size="lg" /> Contact
                            </a>
                        </li>
                        <li>
                            <a href="/devlog" className="nav-link text-white text-center">
                                <FontAwesomeIcon icon={SolidIcons.faCodeBranch} className="d-block mx-auto mb-1" size="lg" /> Dev Log
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  ); 
}