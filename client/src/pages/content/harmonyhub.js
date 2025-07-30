import MDP from './markdownpage';

const harmony = `
> **Disclaimer:** *This project was completed some time ago, and this write-up was created retrospectively. Some details may be limited or generalized.*

# Harmony Hub
---

Harmony Hub was developed as part of the *Web Development: Client-Side Scripting* course, where the assignment evolved alongside our lectures. 
As we progressed through the course and learned new concepts, we continuously updated the project to reflect what we had learned, much like the way 
individual assignments gradually increased in complexity. The goal was to apply full stack development principles without relying on front-end 
frameworks (other than Bootstrap), while incorporating MongoDB in a limited capacity. It was one of the most demanding projects I've worked on, second 
only to Mainframe Development I, where we built on IBM's z/OS through COBOL (Common Business-Oriented Language) and JCL (Job Control Language).
`;

export default function Article() {
  return <MDP title="Auto Shop" article={harmony} />;
}
