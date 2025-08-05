import { useEffect, useState } from "react";
import Head from "next/head";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

function ProjectEntry({ title, description, badges = [], link }) {
  const sortedBadges = (badges || [])
    .slice()
    .sort((a, b) => {
      const yearA = /^\d{4}$/.test(a) ? parseInt(a) : null;
      const yearB = /^\d{4}$/.test(b) ? parseInt(b) : null;

      if (yearA && yearB) {
        return yearB - yearA; // Newest year first
      } else if (yearA) {
        return -1;
      } else if (yearB) {
        return 1;
      } else {
        return a.localeCompare(b);
      }
    });

  return (
    <div className="col">
      <div className="card h-100 shadow-sm custom-card bg-light">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold text-dark">{title}</h5>
          <p className="card-text text-dark small flex-grow-1 text-justify">
            {description || "No description provided."}
          </p>
          <div className="mb-3">
            {sortedBadges.map((badge, i) => (
              <span
                key={i}
                className={`badge me-1 ${
                  /^\d{4}$/.test(badge) && parseInt(badge) >= 2019
                    ? "bg-secondary"
                    : "bg-dark"
                }`}
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
    fetch("https://portfolio2025-g7wk.onrender.com/data/projects")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch projects");
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error("Malformed response");

        // 🔽 Sort projects by newest year in badges
        const sorted = data.slice().sort((a, b) => {
          const extractLatestYear = (badges) => {
            const years = badges
              .filter((badge) => /^\d{4}$/.test(badge))
              .map((yearStr) => parseInt(yearStr));
            return years.length > 0 ? Math.max(...years) : 0;
          };

          const yearA = extractLatestYear(a.badges || []);
          const yearB = extractLatestYear(b.badges || []);

          return yearB - yearA; // Newest year first
        });

        setProjects(sorted);
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
        <h2 className="display-4 mb-4 text-center text-white">Featured Projects</h2>
        <hr className="mb-5 text-white" />
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
