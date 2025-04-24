import { Link } from 'react-router-dom';

function AppNavbar() {
  return (
    <header className="navbar text-center">
      <nav>
        <ul className="nav-menu">
          <li><Link to="/" className="nav-link-large">Home</Link></li>
          <li><Link to="/features" className="nav-link-large">About</Link></li>
          <li><Link to="/pricing" className="nav-link-large">Blog</Link></li>
          <li><Link to="/faqs" className="nav-link-large">Resume</Link></li>
          <li><Link to="/about" className="nav-link-large">Experience</Link></li>
          <li><Link to="/about" className="nav-link-large">Projects</Link></li>
          <li><Link to="/about" className="nav-link-large">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default AppNavbar;
