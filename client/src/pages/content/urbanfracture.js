import MDP from './markdownpage';

const urbanfracture = `
# Urban Fracture
---

**Urban Fracture** is my first major solo video game project — a first-person shooter (FPS) built entirely in Unity 6000.1.2f1. 
Inspired by mid-2000s military shooters like *Call of Duty 4: Modern Warfare*, the game is set in a dystopian, surveillance-heavy cityscape 
riddled with societal collapse and rebellion. Players step into the boots of a lone operative navigating this hostile environment through intense, 
atmospheric, semi-realistic combat.

### Gameplay and Mechanics
---
The core gameplay emphasizes immersive storytelling and tactile movement systems. I implemented mechanics such as sprinting, crouching, leaning, 
and even double-jumping to support player mobility. Combat is built on tight feedback loops — responsive hit detection, visual effects like muzzle 
flashes and blood splatter, and ambient audio textures like footsteps and distant gunfire all contribute to player immersion. A minimal HUD and immersive 
pause/menu system were designed to keep the player anchored in the environment. I also focused heavily on sound design, with environmental reverb and spatial 
audio contributing to the atmosphere.

### Artificial Intelligence and Combat
---
Enemies in Urban Fracture rely on perception-based AI systems that use sight and sound triggers to engage the player. These agents are powered by Unity's 
NavMesh system, with scripted behaviors for pathfinding, combat logic, and tactical positioning. Getting AI to react naturally to player movement was a major 
goal, and the implementation includes line-of-sight targeting and layered enemy states.

### Development Timeline
---
This project was developed over four intense weeks. I treated it like a formal sprint cycle with weekly goals and dev logs:

- **Week 1:** Implemented abstract gun mechanics, camera recoil, and early AI behaviors using trigger volumes for perception.
- **Week 2:** Built a modular weapon inventory system using ScriptableObjects.
- **Week 3:** Polished enemy AI accuracy and animations; improved movement feel.
- **Week 4:** Added VFX, ragdoll physics, refined audio design, and integrated a UI/UX layer.

I scripted everything in C# using Visual Studio 2022 and managed version control with GitHub and Git LFS to handle large assets. 
Custom audio effects were produced in FL Studio.

### Technical Challenges
---
Some major development hurdles included:
- AI navigation in vertical and multi-level spaces.
- Lighting optimization for indoor and outdoor transitions.
- Managing project scope as a solo developer.
- Syncing interdependent systems like health, combat feedback, and killfeeds.

### Features
---
- firearms with modular recoil logic.
- Custom AI combat framework with reaction states.
- Killfeed system and level selection menu.
- Custom camera effects, visual and sound feedback systems.
- Real-time health and damage processing.

The entire project was structured in a modular fashion to allow system reuse and easier bug isolation. This became essential as complexity increased.

## Development Reflections
---
Urban Fracture wasn't just about making a game — it was a crash course in solo game dev. I learned how crucial good planning is when working with Unity's 
newer features like URP and ECS. I also learned the hard way about asset management and why tools like Git LFS are necessary. Documenting everything in dev 
logs helped me stay on track. I was able to pivot, adjust scope, and reflect clearly on what was working or not. From camera shake effects to redesigning levels 
mid-sprint, every change was intentional and traceable.

## Future Plans
---
Urban Fracture will eventually include:
- A playable demo with outdoor levels.
- Smarter enemy AI with cover-based behavior.
- More polish across all systems — visuals, animations, sound.

This game has been a proving ground for me as a developer. It taught me the value of iterative development, full-stack game design, and project management.

## External Links
---
- **Source Code:** [GitHub - Urban Fracture](https://github.com/RamiyanGangatharan/UrbanFracture)
- **Playable Demo:** Available in the GitHub repository

`;

export default function Article() {
  return <MDP title="Urban Fracture" article={urbanfracture} />;
}
