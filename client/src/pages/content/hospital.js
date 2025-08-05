import MDP from './markdownpage';

const hospital = `
> **Disclaimer:** *This project was completed some time ago, and this write-up was created retrospectively. Some details may be limited or generalized.*

# The Hospital Database System
---

This group project was part of our Database Development II course and focused on designing a normalized database (in 3NF) for a 
fictional hospital in a mid-sized city. It was introduced at the start of the semester, giving us several weeks to design and 
implement the system. Our main tools were **Microsoft SQL Server 2022** for development and **Visio 2022** for modeling. In Visio, 
we used a mix of **UML** and **Crow's Foot notation** to map out the database structure, relationships, and constraints.
The scope included everything from patient records, staff details, departments, scheduling, billing, and more. It was meant to 
simulate the kind of real-world complexity you'd expect in a live environment, and it pushed us to think beyond textbook examples.

`;

export default function Article() {
  return <MDP title="The Hospital Database System" article={hospital} />;
}
