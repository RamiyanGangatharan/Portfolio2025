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

The scope of this project is a small-scale, LAN-based multiplayer video game supporting 2 to 8 players. 
The game is match-based, with victory awarded to the player or team that achieves the highest number of 
cumulative kills within a fixed time limit. During early development and testing, the game will be run in 
a single-player environment to validate core systems prior to multiplayer deployment.
The primary technical focus of the project is the implementation of a highly responsive player controller 
that adheres to consistent and believable physics rules. Player input, movement, and interaction must feel 
immediate and predictable, forming a solid mechanical foundation for competitive gameplay.
Once core movement and combat systems are validated, players will participate in structured matches governed 
by clear rules, scoring logic, and win conditions. To minimize complexity during initial development, the first 
and only game mode implemented will be Free-for-All (FFA), where each player competes independently and scores 
are tracked on a per-player basis. This constrained scope allows for focused iteration on gameplay fundamentals, movement, 
shooting, collision, and scoring, before expanding to additional modes or multiplayer features.

#### Stage 2: Defining Requirements

## Functional Requirements
    - FR-1: The system shall allow the player to control a character using keyboard and mouse input.
    - FR-2: The system shall apply physics-based movement to the player character.
    - FR-3: The system shall allow players to use firearms and explosives to deal damage to other players.
    - FR-4: The system shall detect player deaths and attribute each kill to the correct player.
    - FR-5: The system shall track individual player scores and kill counts during a match.
    - FR-6: The system shall respawn players at a valid spawn location after death.
    - FR-7: The system shall start and end a Free-for-All match based on a predefined time limit.
    - FR-8: The system shall determine the match winner based on the highest kill count at the end of the match.
    - FR-9: The system shall provide a pre-match state that initializes player data and resets scores.
    - FR-10: The system shall prevent player input during non-active match states (e.g., pre-match or post-match).
    - FR-11: The system shall assign a health value to each player character
    - FR-12: The system shall reduce a player's health when damage is received.
    - FR-13: The system shall trigger a player death when health reaches zero.
    - FR-14: The system shall provide visual feedback when a player takes damage.
    - FR-15: The system shall provide audio feedback for firing weapons and player deaths.
    - FR-16: The system shall display the player's current score and match time during gameplay.
    - FR-17: The system shall ensure players do not spawn inside solid objects or other players.
    - FR-18: The system shall allow multiple predefined spawn locations per map.
    - FR-19: The system shall enforce a firing rate limit for each weapon.
    - FR-20: The system shall allow weapons to reload when ammunition is depleted.
    - FR-21: The system shall synchronize player positions and actions across a local network.
    - FR-22: The system shall support between 2 and 8 players in a single match.
    - FR-23: The system shall allow players to switch between at least two weapon slots (e.g., Primary and Secondary).
    - FR-24: The system shall kill or teleport players who fall outside the defined map boundaries.
    - FR-25: The system shall allow players to join a match already in progress if the player limit has not been reached.
    
## **Non-Functional Requirements**
    - NFR-1: The system shall maintain a minimum frame rate of 60 FPS during active gameplay on target hardware.
    - NFR-2: The system shall allow player input to be reflected in on-screen character movement within 50ms under normal gameplay conditions.
    - NFR-3: The system shall operate without crashing for the full duration of a standard match.
    - NFR-4: The system shall provide consistent physics behavior across all matches and play sessions.
    - NFR-5: The system shall allow weapon damage, firing behavior, and hit detection to be deterministic under identical conditions.
    - NFR-6: The system shall support 2 to 8 players in a LAN environment without noticeable performance degradation.
    - NFR-7: The system shall ensure network latency does not exceed 100 milliseconds in a local network environment.
    - NFR-8: The system shall reset all gameplay-related data between matches without requiring a restart.
    - NFR-9: The system shall present visual and audio feedback that is clear and distinguishable during combat scenarios.
    - NFR-10: The system shall maintain consistent gameplay behavior regardless of player join order or respawn frequency.
    - NFR-11: The system shall allow for core modular gameplay systems like movement, combat, scoring, and match flow.
    - NFR-12: The system shall allow for gameplay configuration menus to be adjustable without modifying core code.
    - NFR-13: The system shall allow core gameplay mechanics to be tested in a single-player environment.
    - NFR-14: The system shall prevent game-breaking states such as permanent player immobilization or infinite respawn loops.
    - NFR-15: The system shall provide stable gameplay for match durations of at least 10 minutes without degradation.

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
