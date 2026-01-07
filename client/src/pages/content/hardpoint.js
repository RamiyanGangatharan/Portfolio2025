import MDP from './markdownpage';

const hardpoint = `
# Hardpoint
---

### Overview
--- 

Hardpoint is a work-in-progress first-person shooter inspired by CS:GO or early Call of Duty matches,
built to explore the fundamentals of game development using Unity 6 and C#. 
The project focuses on designing core gameplay systems such as player movement, 
weapon mechanics, AI behavior, and level design, while also experimenting with 
optimization, modular architecture, and iterative development. This article 
documents the system design, development process, and technical decisions that 
have shaped the project so far, providing insight into both the challenges faced 
and the lessons learned along the way.

### Development Documentation
---

NOTE: this is a to-do list for my SDLC process

#### Stage 1: Planning & Requirement Analysis

- Project Scope → [What is in scope / out of scope?]  
- Objectives → [Primary goals / learning outcomes]  
- Work Distribution → [Team or solo responsibilities, if applicable]  

#### Stage 2: Defining Requirements

- Functional Requirements → [List key features / mechanics]  
- Non-Functional Requirements → [Performance, UX, technical constraints]  

#### Stage 3: Design

- Architecture → [High-level system design / diagrams / tech choices]  
- Key Decisions → [Major tradeoffs, alternative approaches considered]  
- UI / UX Design → [Optional: layouts, wireframes, controls]  

#### Stage 4: Development

- Iterations → [Milestone-based progress, important changes]  
- Challenges → [Problems faced, solutions implemented]  
- Experimentation → [Anything tested / learned along the way]  

#### Stage 5: Testing

- Testing Methodology → [How you validated systems / mechanics]  
- Bugs / Issues → [Major problems and fixes]  
- Iteration based on feedback → [Adjustments made after testing]  

#### Stage 6: Deployment

- Deployment Strategy → [How and where the project is hosted / built]  
- Tools / Services → [Platforms, CI/CD, servers]  
- Limitations → [Current known issues / unimplemented features]  

---

### Lessons Learned / Reflections
---

- Key takeaways → [Technical insights, workflow improvements]  
- What would you do differently → [Future enhancements / refactors]  
- Skills gained → [New concepts learned, tools mastered]  

---

### GitHub / Live Links
---

- [Repository / Demo Link]  
- [Optional: Documentation / Assets / Screenshots]


`;


export default function Article() {
  return <MDP title="Hardpoint" article={hardpoint} />;
}
