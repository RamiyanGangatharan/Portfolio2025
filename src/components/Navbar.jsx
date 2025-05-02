import { useState } from "react";
import { Menu, X } from "lucide-react";

function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 500); // Matches the fadeOutRight duration
    } else {
      setIsOpen(true);
    }
  };

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 500);
  };

  return (
    <header>
      <div className="d-flex justify-content-between align-items-center w-100">
        <span className="brand-title">RG</span>

        {/* Hamburger button */}
        <button
          className="btn btn-link text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navbar with animation control */}
      <div
        className={`mobile-nav ${isOpen ? "show" : ""} ${
          isClosing ? "closing" : ""
        }`}
        id="navbarToggle"
      >
        <ul className="nav py-3">
          <li className="nav-item card-item">
            <a className="nav-link-large" href="/" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item card-item">
            <a className="nav-link-large" href="/2" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="nav-item card-item">
            <a className="nav-link-large" href="/3" onClick={closeMenu}>
              Resume
            </a>
          </li>
          <li className="nav-item card-item">
            <a className="nav-link-large" href="/4" onClick={closeMenu}>
              Experience
            </a>
          </li>
          <li className="nav-item card-item">
            <a className="nav-link-large" href="/5" onClick={closeMenu}>
              Blog
            </a>
          </li>
          <li className="nav-item card-item">
            <a className="nav-link-large" href="/6" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default AppNavbar;
