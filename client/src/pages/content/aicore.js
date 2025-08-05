import MDP from './markdownpage';

const aicore = `

# AICore - VR Assistant  
---

> ⚠️ *Note: Due to a non-disclosure agreement (NDA), I am limited in how much technical detail I can share. 
However, this post outlines my general experience and the skills I applied throughout the development process.*

## TL;DR  
---

*We built a working prototype that lets users talk to AI through VR using real-time speech recognition, natural language processing, and TTS.*

## Overview  
---

During my internship at **The MRC Studio** at Durham College, I had the opportunity to contribute to an immersive virtual reality project powered by 
**AICore**, a large language model-based assistant. Our team consisted of six interns split across two projects: one focused on building a website for 
uploading 3D assets into Unity, and the other — my choice — involved designing and implementing a VR-based virtual assistant.

## AICore  
---

Without overexplaining the product due to proprietary constraints, AICore is an in-house Large Language Model (LLM). Our team leveraged its capabilities 
to explore innovative research opportunities during the internship.

## Development Journey  
---

The concept for the assistant emerged from the technology available to us: a Meta Quest 2 headset, a greenroom, the Unity Engine, a demo game, 
and our collective programming knowledge as a two-person team. Since we were programming students — not game developers — we were given the first 
of our four-week internship to familiarize ourselves with Unity. That first week flew by as we played around with a museum demo the research 
department created, with meetings alongside our principal investigators, whiteboard planning sessions, technical brainstorming, and building project 
timelines. It was clear early on that working in a studio environment was essentially like handling a large, structured group project — just with a 
more relaxed tone.

By Week 2, our plan was to create an assistant that would answer questions relating to the museum pieces. We had successfully figured out how to transmit 
voice input from the headset into Unity. This implementation was initially buggy, especially when it came to transcribing speech within the VR environment. 
Once transcription was working, we began figuring out how to send that data over the internet and into AICore. Frankly, from Week 2 to Week 4, our focus 
remained on refining this pipeline. By the end of Week 3, we had a rough algorithm that successfully passed transcriptions to the LLM and received responses. 
Toward the end of the internship, we were able to convert the LLM's text-based replies into synthesized speech.

### Final System Pipeline  
\`\`\`  
Speech-to-Text (STT) → Text → Hypertext Transfer Protocol (HTTP) → LLM → Text → Text-to-Speech (TTS)  
\`\`\`

## Tools Used  
---

- **Unity Engine 4** - VR development and scene management  
- **Meta Quest 2** - Hardware platform for testing and deployment  
- **C#** - Core programming language used in Unity scripting  
- **Custom LLM (AICore)** - Natural language processing and response generation  
- **Text-to-Speech (TTS) & Speech-to-Text (STT)** - For VR-to-AI communication  
- **HTTP Networking** - Data transmission between Unity and the LLM  

## Skills Applied  
---

- Rapid prototyping in unfamiliar tools  
- Team-based collaboration in a research setting  
- Integrating real-time speech interfaces with VR  
- Planning, diagramming, and documenting a technical workflow  
- Debugging and refining voice-input pipelines under time constraints  

## What I Learned  
---

This project taught me that even with limited time and unfamiliar tech, a strong foundation in programming makes you adaptable. 
I gained practical experience in integrating natural language systems into a real-time environment, learned how to communicate in a professional 
research setting, and reinforced the importance of iterative prototyping when working with complex systems like voice and VR. Most importantly, I learned 
that building innovative tech isn't about being perfect — it's about making consistent, functional progress under constraints.

## Sources  
---

- **Source Code:** *Private*

`;

export default function Article() {
  return <MDP title="AICore - VR Assistant" article={aicore} />;
}
