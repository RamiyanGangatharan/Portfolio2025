import "@/styles/globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export default function DevLog() {
  return (
    <>
    <head><title>Devlog</title></head>
    <Header/>
    <main>
      <h1 className="display-4 text-center mt-5 mb-4">Development Log</h1>

      <div className="devlog card bg-dark text-white shadow-lg border-0 p-4 mb-5">
        <div className="mb-3 mt-2">
          <span className="badge bg-light text-dark px-3 py-2 fs-6 fw-semibold">
            July 9th, 2025
          </span>
        </div>
        <div className="bg-light text-dark rounded p-3">
          <ul>
            <h5>General</h5>
            <ul>
              <li>Created and styled a header and footer for the website.</li>
              <li>Organized a file structure for an ideal long term plan.</li>
              <li>Split the CSS files by usage and joined them in a global file.</li>
              <li>Removed the TO-DO list and replaced with a development log</li>
            </ul>
            <br/>
            <h5>Styling</h5>
            <ul>
              <li>Installed Bootstrap 5.3.</li>
              <li>Installed Font Awesome for free icons.</li>
              <li>Made a colour scheme and chose the Roboto font.</li>
            </ul>
          </ul>
        </div>

        <div className="mb-3 mt-5">
          <span className="badge bg-light text-dark px-3 py-2 fs-6 fw-semibold">
            July 8th, 2025
          </span>
        </div>
        <div className="bg-light text-dark rounded p-3">
          <ul>
            <li>Built the foundational structure of the website.</li>
            <li>
              Conforming to the MERN Stack, I have used the following technologies:
              <ul>
                <li>MongoDB (planned)</li>
                <li>ExpressJS</li>
                <li>NextJS (Modern React)</li>
                <li>NodeJS</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  );
}
