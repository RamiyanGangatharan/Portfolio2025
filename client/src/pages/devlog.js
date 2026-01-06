import Head from "next/head";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import devLogs from "@/data/devlogs.json";

function DevLogEntry({ date, sections }) {
  return (
    <div className="mb-4">
      {/* Date badge */}
      <div className="mb-2 text-center text-md-start">
        <span className="badge bg-light text-dark px-3 py-2 fs-6">
          {date}
        </span>
      </div>

      {/* Log content */}
      <div className="bg-dark text-light rounded p-3 shadow-sm">
        {sections.map(({ title, items }, index) => (
          <div key={index} className="mb-3">
            <h5 className="fw-bold">{title}</h5>
            <ul className="ps-3 mb-0">
              {items.map((item, i) => (
                <li key={i} className="small">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DevLog() {
  return (
    <>
      <Head>
        <title>Developer Logs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="container-fluid px-2 px-md-4 my-3">
        <div className="devlog card bg-dark text-white shadow-lg border-0 p-3 p-md-4">
          <h1 className="display-5 text-center mb-4">Development Log</h1>

          {devLogs.map((log, i) => (
            <DevLogEntry key={i} {...log} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
