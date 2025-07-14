import Link from "next/link";

export default function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center bg-dark text-white py-3 mt-1 px-5">
      <p className="col-md-4 mb-0">© 2025 Ramiyan Gangatharan</p>
      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <Link href="/" className="nav-link text-white">Home</Link>
        </li>
        <li className="nav-item">
          <Link href="/projects" className="nav-link text-white">Projects</Link>
        </li>
        <li className="nav-item">
          <Link href="/resume" className="nav-link text-white">Resume</Link>
        </li>
        <li className="nav-item">
          <Link href="/contact" className="nav-link text-white">Contact</Link>
        </li>
        <li className="nav-item">
          <Link href="/devlog" className="nav-link text-white">Dev Log</Link>
        </li>
      </ul>
    </footer>
  );
}
