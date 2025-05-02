import { useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * `AppNavbar` is a responsive navigation bar component designed for mobile-first layouts.
 * It toggles between a hamburger menu and a close icon, and animates the mobile menu.
 *
 * @component
 * @returns {JSX.Element} A responsive navigation bar.
 */
function AppNavbar() {
  /**
   * Tracks whether the mobile menu is currently open.
   * @type {[boolean, Function]}
   */
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Tracks whether the mobile menu is in the process of closing.
   * Used for triggering CSS animations like `fadeOutRight`.
   * @type {[boolean, Function]}
   */
  const [isClosing, setIsClosing] = useState(false);

  /**
   * Toggles the mobile menu open or closed.
   * Initiates a delay if closing to allow the exit animation to complete.
   */
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

  /**
   * Closes the mobile menu with a delay for the closing animation.
   * Typically used when a menu link is clicked.
   */
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

        {/* Hamburger/Close icon button */}
        <button
          className="btn btn-link text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile navigation menu with conditional classes for animations */}
      <div
        className={`mobile-nav ${isOpen ? "show" : ""} ${isClosing ? "closing" : ""}`}
        id="navbarToggle"
      >
        <ul className="nav py-3">
          <li className="nav-item card-item">
            <a className="nav-link-large" href="/" onClick={closeMenu}>Home</a>
          </li>
          <li className="nav-item card-item">
            <a className="nav-link-large" href="/2" onClick={closeMenu}>About</a>
          </li>
          <li className="nav-item card-item">
            <a className="nav-link-large" href="/3" onClick={closeMenu}>Resume</a>
          </li>
          <li className="nav-item card-item">
            <a className="nav-link-large" href="/4" onClick={closeMenu}>Experience</a>
          </li>
          <li className="nav-item card-item">
            <a className="nav-link-large" href="/5" onClick={closeMenu}>Blog</a>
          </li>
          <li className="nav-item card-item">
            <a className="nav-link-large" href="/6" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default AppNavbar;
