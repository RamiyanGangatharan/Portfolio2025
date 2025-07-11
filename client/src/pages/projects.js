import { useEffect, useState } from "react";
import Head from "next/head";
import "@/styles/globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

function ProjectEntry({ title, description, badges = [], link }) {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm custom-card bg-light">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold text-dark">{title}</h5>
          <p className="card-text text-muted small flex-grow-1">
            {description || "No description provided."}
          </p>
          <div className="mb-3">
            {(badges || []).map((badge, i) => (
              <span
                key={i}
                className={`badge me-1 ${badge === "2025" ? "bg-secondary" : "bg-dark"}`}
              >
                {badge}
              </span>
            ))}
          </div>
          {link ? (
            <a href={link} className="btn btn-outline-dark mt-auto w-100">
              View Project
            </a>
          ) : (
            <button className="btn btn-secondary mt-auto w-100" disabled>
              Coming Soon
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/data/projects")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch projects");
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error("Malformed response");
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Header />
      <main className="container my-5">
        <h2 className="display-6 mb-4 text-center">Featured Projects</h2>
        {loading && <p>Loading projects...</p>}
        {error && <p className="text-danger">{error}</p>}
        {!loading && !error && projects.length === 0 && (
          <p className="text-muted text-center">No projects found.</p>
        )}
        {!loading && !error && projects.length > 0 && (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {projects.map((proj, i) => (
              <ProjectEntry key={proj.id || i} {...proj} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
