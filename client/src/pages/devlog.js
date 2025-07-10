import "@/styles/globals.css"; 
import Header from "./components/layout/header"; 
import Footer from "./components/layout/footer"; 

export default function DevLog() 
{
   return (
    <><head><title>Developer Logs</title></head>
      <Header/>
      <main>
          <div className="devlog card bg-dark text-white shadow-lg border-0 p-4 mb-2 mt-2">
              <h1 className="display-4 text-center mt-1 mb-4">Development Log</h1>

                <div className="mb-3 mt-2">
                  <span className="badge bg-light text-dark px-3 py-2 fs-6 fw-semibold">July 10th, 2025</span>
              </div>
              <div className="bg-dark text-light rounded p-3">
                <ul>
                    <h5>General Improvements</h5>
                    <ul>
                        <li>Refactored the codebase and reorganized the file structure for better semantic clarity.</li>
                        <li>Developed a complete contact page integrated with Nodemailer and a server using SMTP.</li>
                        <li>Created async ops to redirect users to the homepage at form submission, preventing spam.</li>
                    </ul>
                    <br/>
                    <h5>Server Enhancements</h5>
                    <ul>
                        <li>Added Nodemailer to enable SMTP email capabilities within the server.</li>
                        <li>Integrated Morgan middleware for request logging and improved server monitoring.</li>
                    </ul>
                </ul>
              </div>

              <div className="mb-3 mt-2">
                  <span className="badge bg-light text-dark px-3 py-2 fs-6 fw-semibold">July 9th, 2025</span>
              </div>
              <div className="bg-dark text-light rounded p-3">
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
                  <span className="badge bg-light text-dark px-3 py-2 fs-6 fw-semibold"> July 8th, 2025</span>
              </div>
              <div className="bg-dark text-light rounded p-3">
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