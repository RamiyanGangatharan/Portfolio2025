import MDP from './markdownpage';

const aboutsite = `
# About This Site
---

Welcome to my personal website — a central hub for my portfolio, blog, and freelance services. This platform was built from the ground up as both a 
personal branding tool and a technical playground. Rather than relying on pre-made templates or drag-and-drop builders, I chose to engineer everything 
myself so that it would reflect not only who I am, but what I'm capable of building.

---

## Tech Stack and Philosophy

The site is built on the **MERN stack**, but with a modern twist — instead of traditional React, I used Next.js for its performance optimizations, 
file-based routing, and server-side rendering capabilities. The frontend is styled using Bootstrap 5.3, enhanced with Font Awesome icons and the 
Roboto Slab typeface to create a clean and readable aesthetic. On the backend, I'm using Express and MongoDB with RESTful API endpoints, all hosted on 
Render and Vercel respectively. From the very start, I wanted this project to serve as a long-term foundation. Every file and folder was structured 
deliberately to scale over time. I split CSS by usage and unified it through a global stylesheet, giving the entire site consistency while maintaining 
modular control.

---

## Building It — Development Journey

The website began taking shape on July 8, 2025, when I laid the foundational structure and aligned the project with a MERN-based workflow. 
by the next day, I had created and styled the header and footer, implemented a custom color scheme, and organized the CSS and project files 
for semantic clarity. The TO-DO list was officially retired in favour of a dedicated Development Log — an early sign that I was treating this 
project as more than a static site.

Throughout the next few days, I tackled some major systems. The contact page was one of the first full-stack features — it uses Nodemailer
with SMTP integration to send emails, complete with asynchronous handling that redirects users post-submission while preventing spam via 
disabled buttons. The backend server, built on Express, was enhanced with Morgan middleware for logging and easier monitoring.

By July 11, I had integrated MongoDB collections to store project data and devlog entries, and began experimenting with fun personal 
touches like a Windows 96-style GUI for the server interface at port 5000. At this point, I also started preventing email spam through UI-based 
safeguards and began rebuilding the projects page entirely.

Then came the content phase. On July 13, I began creating individual Markdown files for each portfolio project. This not only made content updates 
easier but also allowed for a flexible, article-based layout that scales with new entries. Markdown support meant I could write long-form technical blogs, 
reflections, or project retrospectives using lightweight formatting without bloating the frontend logic.

The following day, I worked on syncing all endpoints and links to point to the newly deployed server, ironing out broken paths and replacing local URLs. 
I also started sketching out plans for an admin page, which would eventually allow me to manage project entries and devlogs without editing code directly. 
Shout-out to Ibrahim for assisting with persistent CSS issues around this time — a good reminder that collaboration still matters, even on solo builds.

By July 14, both the frontend and backend were successfully deployed to Vercel and Render, completing the site's initial deployment cycle. At this stage, 
it was fully functional: projects were live, articles were rendered via Markdown, the contact form was secure and working, and the backend had database support 
for future expansions.

Now (at the time of writing on August 5th 2025), I am up to date with my article postings and will update as I go without a backlog.

---

## What You'll Find Here

- **Projects**: My portfolio, with markdown-powered pages describing the goals, tools, and lessons behind each build.
- **Articles**: Write-ups and devlogs, like this one, documenting my process and technical decisions.
- **Hire Me**: Freelance service offerings (e.g., consulting, tutoring, development).
- **Contact**: An email form with backend logic that ensures clean, secure submissions.

---

## What's Next

This site is far from finished — it's a living project. I'm currently planning an **admin panel** that will allow me to manage content dynamically, 
without needing to touch the codebase for every small change. Other goals include enhancing performance, adding **search and filtering** for portfolio 
entries, and possibly integrating analytics dashboards to monitor engagement over time.

---

Thanks for checking it out. Everything here was designed, built, and maintained by me — and if you're reading this article on the site itself, well, that's 
the whole point.
`;

export default function Article() {
  return <MDP title="About This Site" article={aboutsite} />;
}
