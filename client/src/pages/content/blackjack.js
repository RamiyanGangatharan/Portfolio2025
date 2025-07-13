import MDP from './markdownpage';

const blackjack = `
> **Disclaimer:** *This project was completed some time ago, and this write-up was created retrospectively. Some details may be limited or generalized.*

# Blackjack Group Project
---

This project was developed as a semester-long group assignment for our Object-Oriented Programming III course. 
At the outset, we were allowed to propose our own ideas and initially pitched a restaurant-finding application. 
However, shortly after, we were informed by our professor that upper faculty had restricted the project themes 
to card games. Blackjack wasn't originally on the approved list, but after making a case for it, we received 
official approval to proceed. The first month of the course was dedicated to planning. We drafted formal contracts, 
wrote pseudocode, and created diagrams and wireframes. During this phase, my teammate and I focused on building a 
console-based prototype to establish the core gameplay systems, while the rest of the team worked on front-end design.

We held weekly meetings with both our professor and the team to ensure progress and maintain accountability. 
Unlike some groups that faced issues due to dropouts or low engagement, our team remained motivated and committed 
throughout the semester. Technically, we relied heavily on Object-Oriented Programming practices, which helped us 
streamline development and reduce redundant code. The final month proved to be the most challenging. We were tasked 
with integrating the console-based backend with the GUI developed by the rest of the team, similar to mounting a body 
onto a truck frame. Since the systems were developed in parallel, merging them required extensive cross-referencing 
of documentation and manual adjustments. In cases where direct integration failed, we often re-implemented features from 
scratch using the experience gained throughout the semester to create a unified system.

At the end of the term, we presented our final application along with a detailed PowerPoint presentation covering our 
development process and documentation. Thanks to prior experience from a similar [project](/content/carddeck) in Object-Oriented Programming II, 
we had a solid foundation to build upon. One standout observation from the final presentations was the clear disparity in 
project quality across different groups. While some teams demonstrated real collaboration and deep understanding of their work, 
others presented applications that seemed outsourced or AI-generated, with some members unable to explain key features. 
This highlighted the importance of teamwork, accountability, and genuine effort in group-based learning environments.

### Sources
---
- **Source Code:** *Private*
`;

export default function Article() {
  return <MDP title="Blackjack" article={blackjack} />;
}
