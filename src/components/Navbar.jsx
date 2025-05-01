import { Link } from "react-router-dom";

function AppNavbar() {
  return (
    <header>
      <nav>
        <ul className="nav-menu">
          <li><Link to="/" className="nav-link-large">Home</Link></li>
          <li><Link to="/about" className="nav-link-large">About</Link></li>
          <li><Link to="/experience" className="nav-link-large">Experience</Link></li>
          <li><Link to="/projects" className="nav-link-large">Projects</Link></li>
          <li><Link to="/blog" className="nav-link-large">Blog</Link></li>
          <li><Link to="/contact" className="nav-link-large">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default AppNavbar;
