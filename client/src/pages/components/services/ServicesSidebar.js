export default function ServicesSidebar() {
  return (
    <aside className="services-sidebar">
      <a href="/" className="sidebar-brand">
        <span className="brand-name">RG Tech Services</span><br></br>
        <span className="brand-sub">Ramiyan Gangatharan</span>
      </a>

      <nav className="sidebar-nav">
        <a href="#start" className="active">Overview</a>
        <a href="#services">Services</a>
        <a href="#process">Process of Work</a>
        <a href="#work">Recent Repairs</a>
        <a href="#contact">Contact</a>
      </nav>


      <div className="sidebar-footer">
        Independent contractor
      </div>
    </aside>
  );
}
