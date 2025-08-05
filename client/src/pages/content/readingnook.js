import MDP from './markdownpage';

const readingNook = `
> **Disclaimer:** *This project was completed some time ago, and this write-up was created retrospectively. Some details may be limited or generalized.*

# The Reading Nook
---

The Reading Nook was a group project I tackled with two classmates. The assignment was to redesign an AWS-based 
architecture, with multiple scenario options labeled A through D, each increasing in difficulty. Naturally, we picked Scenario D, 
the hardest one, because why not make our lives interesting? Scenario A handed you most of the components. Scenario D? It gave you a 
vague idea and expected you to build nearly everything from scratch. We were responsible for implementing about 90% of the system ourselves.
We approached the challenge like actual software engineers: planning the architecture, scoping requirements, and spinning up prototypes for each part. 
I focused on the **middleware**, using Python with Flask to handle communication between the front end and the database. One teammate specialized in 
the **database**, setting up PostgreSQL in a Docker container. The third took charge of the **frontend**, which I'm pretty sure was built using Svelte.
Individually, the services worked well in their own containers. But once we tried to network everything together, things got messy. Container communication 
kept breaking in weird ways, and despite our best debugging efforts, we couldn't iron out the kinks in time. When presentation day came, we walked through 
our design, explained what worked, what didn't, and how we structured the system. Despite the incomplete integration, we still managed to pull a 
**60%**, which, all things considered, felt like a win.

No regrets.

### Sources
---
- **Source Code:** *Private*
`;

export default function Article() {
  return <MDP title="The Reading Nook" article={readingNook} />;
}
