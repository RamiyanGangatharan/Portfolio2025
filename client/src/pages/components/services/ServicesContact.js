export default function ServiceContact() {
  return (
    <section id="contact" className="services-section">
      <div className="services-card bg-dark text-light p-5">
        <h2 className="section-title text-center mb-4">Contact Me</h2>

        <p className="text-justify mb-4">
          I no longer use a contact form. I am currently working on a new implementation. You can reach me directly via email or Instagram. Click the buttons below to open your email client or Instagram DM.
        </p>

        <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mb-4">
          {/* Email Button */}
          <a
            href="mailto:ramiyan2185@gmail.com"
            className="btn btn-outline-light btn-lg text-center"
          >
            Email Me
          </a>

          {/* Instagram Button */}
          <a
            href="https://www.instagram.com/rgtechservices_to"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light btn-lg text-center"
          >
            Instagram DM
          </a>
        </div>

        <p className="text-center text-gray-400 small">
          I usually respond within 24 hours. Thank you for reaching out 🙂
        </p>
      </div>
    </section>
  );
}
