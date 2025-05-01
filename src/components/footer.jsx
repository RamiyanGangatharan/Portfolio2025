import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} Ramiyan Gangatharan. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
