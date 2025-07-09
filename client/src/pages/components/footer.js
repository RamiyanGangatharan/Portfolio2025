import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as SolidIcons from "@fortawesome/free-solid-svg-icons";
import "@/styles/globals.css";

export default function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 mt-5 border-top px-4">
      <p className="col-md-4 mb-0">© 2025 Ramiyan Gangatharan</p>

      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <a href="/" className="nav-link text-white">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link text-white">
            Developer Log
          </a>
        </li>
      </ul>
    </footer>
  );
}
