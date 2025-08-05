import MDP from './markdownpage';

const hackathon = `

# The Inaugural 2025 Durham College Hackathon  
---

> 🏆 *My team placed 5/12 at Durham College's inaugural 24-hour hackathon (sponsored by DRT) with a React Native app called Driver Dashboard.*

## TL;DR:
In just 24 hours, we developed **Driver Dashboard**, a cross-platform mobile app that improves communication between bus drivers and riders. 
It provides real-time bus updates for riders and enables drivers to report delays or emergencies. Built with React Native, Python, JavaScript, 
and machine learning, and networked using Ngrok, the project earned us a top 5 finish and was an incredible learning experience in rapid development, 
applied AI, and teamwork.

## Introduction
---

In early 2025, Durham College hosted its inaugural 24-hour hackathon — a high-intensity sprint of innovation and problem-solving. Students across programs 
came together to ideate, build, and deliver working tech solutions within a single day. It was more than just a coding challenge; it tested creativity, 
communication, and resilience. I was part of a three-member team of developers and designers. Our mission: build a functional app that could address real 
challenges faced by the Durham Regional Transit (DRT) system.

## Conceptualizing Driver Dashboard
---

Public transit is often disrupted by unforeseen events, but communication with passengers is rarely timely. To tackle this, we created **Driver Dashboard**, 
a mobile app with two distinct user roles:

### Drivers
Drivers could report:
- Traffic delays  
- Road closures  
- Emergencies (e.g., mechanical failures, safety issues)  
— all directly from their interface in the app.

### Riders
Riders could:
- View live updates on their bus  
- Track expected arrival times  
- Visualize their bus on a live map within a certain radius  

This two-way communication system aimed to boost rider confidence and help drivers proactively manage disruptions.

## Technical Architecture and Tools
---

Choosing the right stack was essential given our time limit. Here’s what we used:

#### React Native
- Enabled fast development of a cross-platform mobile interface  
- Supported both Android and iOS deployment from a single codebase  

#### Python
- Handled backend logic and API data processing  
- Managed server-side operations, data flow, and integration with ML models  
- Processed data from the Durham Regional Transit API  

#### Machine Learning
- Used a basic ML model to analyze real-time and historical data  
- Predicted arrival delays and enhanced ETA accuracy for users  

#### Ngrok
- Allowed us to expose our local backend to the internet securely  
- Enabled real-time API interaction between the frontend and backend  

We also used Git for version control and online collaboration tools to stay organized and on schedule.

## Development Process
---

The hackathon began with a sprint planning session where we identified goals, defined the MVP, and assigned tasks based on each team member’s strengths.

- I focused on building the **rider-facing UI** in React Native, ensuring that data could be consumed and visualized in real-time.
- I also contributed to the **driver input form** and integrated it with backend APIs.
- In parallel, our backend team built Python APIs that processed reports from drivers and served them to the frontend in real time.
- We implemented a simple machine learning model to detect and predict delay patterns using time/location data.
- Finally, we used **Ngrok** to solve networking issues quickly and allow real-world testing without complex infrastructure.

Despite the short timeline, we built a fully functioning prototype — and even had time for a round of testing.

## Challenges and Solutions
---

- Time Constraints: We had only 24 hours. By defining a clear MVP and sticking to core features, we avoided scope creep.
- Data Accuracy: Real-time bus data is noisy and inconsistent. Our ML model helped smooth out these inconsistencies and make better predictions.
- Integration: Connecting the frontend and backend in a live environment was tricky. Ngrok provided a seamless tunnel for rapid testing and integration.
- Team Coordination: Coordinating across three people with limited time meant constant communication. We used frequent check-ins to stay aligned.

## Key Contributions
---

- Built the **rider-side interface** in React Native, including real-time update displays  
- Helped implement the **driver input form** for reporting issues  
- Developed backend scripts in Python for data ingestion and processing  
- Integrated Ngrok for live server tunneling and testing  
- Co-developed and tuned a basic ML model to support ETA predictions  
- Participated in live testing and debugging across both platforms

## Lessons Learned
---

This hackathon pushed me out of my comfort zone and taught me a lot about:

- **Rapid prototyping:** Simplicity and clarity are key when time is limited.  
- **Real-world teamwork:** Communication and clear ownership make all the difference.  
- **ML in production:** Even lightweight models can add meaningful features.  
- **Technical stack choices:** The right tools accelerate development and reduce friction.  
- **Resilience:** With focus and teamwork, even ambitious ideas can become reality in 24 hours.

## Final Thoughts
---

Finishing in the top 5 was a proud moment — but what mattered most was the experience: learning new tech, building under pressure, and solving real-world problems with a great team. I'm excited to carry these lessons into future hackathons and software projects.

`;

export default function Article() {
  return <MDP title="2025 Hackathon" article={hackathon} />;
}
