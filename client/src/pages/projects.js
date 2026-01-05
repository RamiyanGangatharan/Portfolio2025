import Head from "next/head";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

import projects from "@/data/projects.json";

function ProjectEntry({ title, description, badges = [], link }) {
  const sortedBadges = badges.slice().sort((a, b) => {
    const yearA = /^\d{4}$/.test(a) ? Number(a) : null;
    const yearB = /^\d{4}$/.test(b) ? Number(b) : null;

    if (yearA && yearB) return yearB - yearA;
    if (yearA) return -1;
    if (yearB) return 1;
    return a.localeCompare(b);
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
                  /^\d{4}$/.test(badge) && Number(badge) >= 2019
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
  const sortedProjects = projects.slice().sort((a, b) => {
    const latestYear = (badges = []) =>
      Math.max(0, ...badges.filter(b => /^\d{4}$/.test(b)).map(Number));

    return latestYear(b.badges) - latestYear(a.badges);
  });

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>

      <Header />

      <main className="container my-5">
        <h2 className="display-4 mb-4 text-center text-white">
          Featured Projects
        </h2>

        <hr className="mb-5 text-white" />

        {sortedProjects.length === 0 ? (
          <p className="text-muted text-center">No projects found.</p>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {sortedProjects.map((proj, i) => (
              <ProjectEntry key={i} {...proj} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
