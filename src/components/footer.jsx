import { Link } from "react-router-dom";

/**
 * `Footer` is a simple footer component that displays the current year
 * and an ownership notice. It is intended to appear at the bottom of the site.
 *
 * @component
 * @returns {JSX.Element} A footer with copyright.
 */
function Footer() {
  /**
   * The current year, dynamically generated.
   * @type {number}
   */
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} Ramiyan Gangatharan. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
