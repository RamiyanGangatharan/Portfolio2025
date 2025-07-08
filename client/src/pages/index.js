import "@/styles/globals.css";

export default function Home() {
  return (
    <main>
      <table aria-label="Project Objectives List">
        <caption className="table-title">
          <h1>Project Objectives List</h1>
        </caption>
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
  );
}
