export default function ServicesWhatIFix() {
  return (
    <section id="services" className="services-section">
      <div className="services-card bg-dark text-light">
        <h2 className="section-title text-center">Services</h2>
        <hr></hr>
        <div className="service-notice">
          <strong>Notice:</strong> I do <u>not</u> perform soldering or custom
          PCB work.
        </div>

        <div className="services-grid">
          {/* Hardware */}
          <div className="service-column">
            <h3 className="service-heading">Hardware</h3>
            <ul className="services-list">
              <li>
                Custom PC Builds
                <ul className="sub-list">
                  <li>PC's, Workstations, Home Offices</li>
                  <li>Component Selection</li>
                </ul>
              </li>
              <li className="mt-2">
                Diagnostics & Troubleshooting
                <ul className="sub-list">
                  <li>Hardware Failure Analysis & Repair</li>
                </ul>
              </li>
              <li className="mt-2">
                Parts Replacement & Upgrades
                <ul className="sub-list">
                  <li>Case Upgrades</li>
                  <li>Cooling Solutions</li>
                  <li>Memory (RAM) Upgrades</li>
                  <li>Storage Upgrades</li>
                  <li>Power Supply Replacements</li>
                  <li>CPU/GPU Replacement</li>
                  <li>Desktop Motherboards</li>
                  <li>Basic Networking Setup</li>
                  <li>VRM / Chipset Repaste</li>
                  <li>Preventive Maintenance</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Software */}
          <div className="service-column">
            <h3 className="service-heading">Software</h3>
            <ul className="services-list">
              <li>Software Engineering & Development</li>
              <ul className="sub-list">
                <li>Web Applications</li>
                <li>Desktop Applications</li>
                <li>Database Design & Development</li>
                <li>Game Development (Unity Engine)</li>
                <li>Automation & Tooling Scripts</li>
              </ul>
              <li className="mt-2">System & Software Consulting</li>
              <ul className="sub-list">
                <li>System Architecture Advice</li>
                <li>Software Stack Planning</li>
                <li>Performance & Optimization</li>
              </ul>
              <li className="mt-2">Maintenance & Optimization</li>
              <ul className="sub-list">
                <li>OS Installation</li>
                <li>Systems Tuning</li>
                <li>Debugging/Code Review</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
