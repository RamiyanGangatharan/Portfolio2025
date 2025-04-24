import { Link } from 'react-router-dom';
import '../styles.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="text-center text-light">© {currentYear} Ramiyan Gangatharan</p>
    </footer>
  );
}

export default Footer;
