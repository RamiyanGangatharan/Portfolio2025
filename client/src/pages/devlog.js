import "@/styles/globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

function DevLogEntry({ date, sections, image }) {
  return (
    <>
      <div className="mb-3 mt-4"><span className="badge bg-light text-dark px-3 py-2 fs-6">{date}</span></div>
      <div className="bg-dark text-light rounded p-3">

        {/* Creates a key and a pair, looping through the JSON entries */}
        {sections.map(({ title, items }, index) => (
          <div key={index} className="mb-3">
            <h5>{title}</h5>
            <ul>{items.map((item, i) => (<li key={i}>{item}</li>))}</ul>
          </div>
        ))}
        {image && (<div className="text-center px-5"><img src={image} alt={`Dev log for ${date}`} /></div>)}
      </div>
    </>
  );
}

export default function DevLog() {
  const logs = [
    {
      date: "July 10th, 2025",
      image: "/img/devlogs/serverlog.png",
      sections: [
        {
          title: "General",
          items: [
            "Refactored the codebase and reorganized the file structure for better semantic clarity.",
            "Developed a complete contact page integrated with Nodemailer and a server using SMTP.",
            "Created async ops to redirect users to the homepage at form submission, preventing spam.",
          ],
        },
        {
          title: "Server",
          items: [
            "Added Nodemailer to enable SMTP email capabilities within the server.",
            "Integrated Morgan middleware for request logging and improved server monitoring.",
          ],
        },
      ],
    },
    {
      date: "July 9th, 2025",
      image: "/img/devlogs/homepagelog.png",
      sections: [
        {
          title: "General",
          items: [
            "Created and styled a header and footer for the website.",
            "Organized a file structure for an ideal long term plan.",
            "Split the CSS files by usage and joined them in a global file.",
            "Removed the TO-DO list and replaced with a development log.",
          ],
        },
        {
          title: "Styling",
          items: [
            "Installed Bootstrap 5.3.",
            "Installed Font Awesome for free icons.",
            "Made a colour scheme and chose the Roboto font.",
          ],
        },
      ],
    },
    {
      date: "July 8th, 2025",
      image: "/img/devlogs/startuplog.png",
      sections: [
        {
          title: "Foundation",
          items: [
            "Built the foundational structure of the website.",
            "Conforming to the MERN Stack (but using NEXT), I have used the following technologies:", 
          ],
        },
      ],
    },
  ];

  return (
    <>
      <head>
        <title>Developer Logs</title>
      </head>
      <Header />
      <main>
        <div className="devlog card bg-dark text-white shadow-lg border-0 p-4 mb-2 mt-2">
          <h1 className="display-4 text-center mt-1 mb-4">Development Log</h1>
          {logs.map((log, index) => (<DevLogEntry key={index} {...log} />))}
        </div>
      </main>
      <Footer />
    </>
  );
}
