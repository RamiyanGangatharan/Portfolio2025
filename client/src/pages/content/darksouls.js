import MDP from './markdownpage';

const darksouls = `
# Dark Souls Prototype
---

During my internship at The MRC Studio, I developed a Dark Souls-inspired prototype as a hands-on way to familiarize 
myself with the Unity Engine. To guide my learning, I followed an in-depth 
[YouTube tutorial series](https://youtu.be/LOC5GJ5rFFw?list=PLD_vBJjpCwJtrHIW1SS5_BNRk6KZJZ7_d) 
that covered essential aspects of game development from the ground up. This allowed me to grasp the basics of player controls, 
camera mechanics, and environmental interactions within a 3D space.

One of the key lessons from this project was understanding how physics operate in a 3D game world. I learned how Unity’s physics engine handles 
collisions, rigidbody dynamics, and gravity, which are critical for creating realistic and responsive gameplay. This experience also pushed me 
to deepen my knowledge of advanced C# programming. I implemented scripts to manage character states and game events, 
improving my coding discipline and problem-solving skills in a real-time interactive environment.

Beyond coding and physics, the project gave me practical experience using Unity’s development tools, including scene setup, prefab management, 
and animation systems. These skills proved invaluable as I progressed in my career and later used them to build a more sophisticated game, Urban Fracture, 
after completing my internship. The Dark Souls prototype was more than just a learning project; it was a stepping stone that helped me understand game 
development as an iterative, creative process requiring both technical knowledge and design thinking.

---

- **Source Code:** [GitHub Repository](https://github.com/RamiyanGangatharan/DarkSoulsUnity)
`;

export default function Article() {
  return <MDP title="Dark Souls Prototype" article={darksouls} />;
}
