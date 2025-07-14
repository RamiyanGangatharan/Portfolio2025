import { useEffect, useState } from "react";
import Head from "next/head";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

function DevLogEntry({ date, sections}) {
  return (
    <>
      <div className="mb-3 mt-4">
        <span className="badge bg-light text-dark px-3 py-2 fs-6">{date}</span>
      </div>
      <div className="bg-dark text-light rounded p-3">
        {sections.map(({ title, items }, index) => (
          <div key={index} className="mb-3">
            <h5>{title}</h5>
            <ul>{items.map((item, i) => (<li key={i}>{item}</li>))}</ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default function DevLog() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/data/devlogs")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch dev logs");
        return res.json();
      })
      .then((data) => {
        setLogs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Developer Logs</title>
      </Head>
      <Header />
      <main>
        <div className="devlog card bg-dark text-white shadow-lg border-0 p-4 mb-2 mt-2">
          <h1 className="display-4 text-center mt-1 mb-4">Development Log</h1>
          {loading && <p>Loading dev logs...</p>}
          {error && <p className="text-danger">{error}</p>}
          {!loading && !error && logs.map((log) => (
            <DevLogEntry key={log.id} {...log} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
