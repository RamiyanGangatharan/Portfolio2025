import MDP from './markdownpage';

const autoshop = `
> **Disclaimer:** *This project was completed some time ago, and this write-up was created retrospectively. Some details may be limited or generalized.*

# Auto Shop
---

This project was centered around strengthening my C# programming skills through hands-on experience with Windows Forms development. 
It also provided an opportunity to practice UI design principles while managing basic data processing tasks within a desktop environment.
Completed as part of the *Object-Oriented Programming II* course at Durham College, the assignment required us to build software for a 
fictional car dealership. The core functionality of the application included managing vehicle inventory by capturing details such as make, 
model, year, engine type, price, and door count. While this may not be the most advanced project showcased on my portfolio, it served as a 
critical stepping stone in my journey toward more complex applications. The final version of the app featured a clean user interface with 
input fields for each vehicle attribute and a centralized data table for displaying the dealership's current stock. The focus was on building a 
straightforward, user-friendly layout that streamlined vehicle data entry and visualization.

---

- **Source Code:** [GitHub Repository](https://github.com/RamiyanGangatharan/AutoShopForm)
`;

export default function Article() {
  return <MDP title="Auto Shop" article={autoshop} />;
}
