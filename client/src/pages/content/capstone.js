import MDP from './markdownpage';

const capstone = `
# The Student Advisor Ticketing System
---

The **Student Advisor Ticketing System (SATS)** was the focus of my year-long capstone project at Durham College, 
developed in close collaboration with the academic faculty. What started as a casual inquiry from a professor in 
November 2024 quickly grew into a major initiative supported by upper faculty leadership, including the Dean and their 
associates. The motivation behind the project was a real operational challenge faced by academic advisors who were 
overwhelmed by the sheer volume of student requests. Prior to SATS, these requests were managed manually using scattered 
emails and spreadsheets, leading to inefficiencies and delays. Our goal was to design and develop a robust internal ticketing 
system that could streamline appointment scheduling, improve communication, and provide a transparent workflow for both students 
and staff. The project demanded a solution that was not only functional but also intuitive and accessible, suitable for tablet 
use by advisors on the go.

From the outset, we took a ground-up approach, implementing every component of the system from scratch. This included developing 
a custom SMTP email module to manage automated notifications and confirmations, which was a technically challenging but essential 
feature. Having full control over the email communication process allowed us to tailor the system's interaction with users and 
ensured reliable delivery of updates and reminders. Throughout the development process, we adhered to a formal sprint workflow. 
This involved regular sprint planning, review sessions, and continuous integration of feedback. Beyond coding, we were heavily 
involved in major meetings with faculty and stakeholders to align the system's capabilities with real-world requirements. 
This professional environment underscored the importance of clear communication and adaptability, as we regularly presented progress 
updates and adjusted priorities based on evolving feedback.

Technically, the system was built with a .NET backend using C# for business logic and database interaction, paired with a responsive 
React frontend designed specifically for tablet devices. The backend interfaced with a SQL Server database that managed ticket data, 
user roles, and dynamic load balancing logic. One of the more complex technical challenges was designing and implementing a dynamic 
routing system that mapped advisor availability and skill sets, ensuring that tickets were assigned efficiently to balance workloads. 
Security was also a priority: we integrated Microsoft OAuth for secure, role-based authentication to safeguard sensitive information. 
The interface included detailed ticket logging, comprehensive analytics dashboards for administrators, and flexible manual controls for 
overriding automatic assignments when necessary. After months of development, we successfully delivered a fully functional system that 
was well received by the faculty.

The project culminated in a public showcase at the Durham College SEIT IT Expo, where SATS was demonstrated to students, staff, and faculty. 
This event was a significant milestone that highlighted the practical impact of our work and the potential for further adoption across the college. 
Even after our team graduated and formally left the program in April 2025, the system's development continued. Interns took over maintenance 
and feature expansion, building on the solid foundation we established. Reflecting on this experience, I recognize how it pushed me to grow not 
just as a developer but as a professional capable of delivering complex software solutions under real-world constraints. The capstone taught me 
invaluable lessons in end-to-end project management, stakeholder collaboration, and building scalable, maintainable systems within an institutional 
environment.

---

- **Source Code:** *Not shared due to institutional policies*
`;

export default function Article() {
  return <MDP title="DC - Capstone" article={capstone} />;
}
