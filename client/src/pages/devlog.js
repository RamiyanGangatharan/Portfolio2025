import "@/styles/globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export default function DevLog() {
  return (
    <>
    <Header/>
    <main>
      <h1 className="display-4 text-center mt-4 mb-4">Project Objective List</h1>
      <table aria-label="Project Objectives List">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Create working webpage</td>
            <td>Build the foundational structure of the website.</td>
            <td>COMPLETE</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Create dev logs</td>
            <td>Document progress via README and on-site dev log section.</td>
            <td>IN PROGRESS</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Create Header</td>
            <td>Create a minimalist header for the website.</td>
            <td>INCOMPLETE</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Create Footer</td>
            <td>Create a minimalist footer for the website.</td>
            <td>INCOMPLETE</td>
          </tr>
          <tr>
          <td>5</td>
          <td>Create homepage</td>
          <td>
            Build an informative landing page with a summary about me<br/>
            and links to other sections.
          </td>
          <td>INCOMPLETE</td>
          </tr>
        </tbody>
      </table>
    </main>
    <Footer/>
    </>
  );
}
