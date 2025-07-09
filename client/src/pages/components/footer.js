import "@/styles/globals.css"; 

export default function Footer() 
{ 
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center bg-dark text-white py-3 mt-1 px-5">
        <p className="col-md-4 mb-0">© 2025 Ramiyan Gangatharan</p>
        <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><a href="/" className="nav-link text-white">Home</a></li>
            <li className="nav-item"><a href="/projects" className="nav-link text-white">Projects</a></li>
            <li className="nav-item"><a href="/resume" className="nav-link text-white">Resume</a></li>
            <li className="nav-item"><a href="/contact" className="nav-link text-white">Contact</a></li>
            <li className="nav-item"> <a href="/devlog" className="nav-link text-white">Dev Log</a></li>
        </ul>
    </footer>
  ); 
}