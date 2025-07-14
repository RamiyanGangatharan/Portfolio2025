import MDP from './markdownpage';

const JavaEE = `
> **Disclaimer:** *This project was completed some time ago, and this write-up was created retrospectively. Some details may be limited or generalized.*

# Web Development Enterprise Assignment
---

This project was the culmination of a semester-long course focused on Java Enterprise Edition (Java EE) and web development using Java Servlet Pages (JSP), 
hosted on an Apache Tomcat server. The goal was to simulate a simplified school system capable of managing and tracking both faculty and student data. 
As part of the assignment, I designed and implemented a multi-page web application using JSP and Servlets.
The system supported core features such as viewing and managing profiles, filtering by department or role, and validating form inputs. Emphasis was placed on 
proper separation of concerns through the MVC (Model-View-Controller) design pattern, which greatly enhanced the maintainability and scalability of the codebase. 
A major focus of the project was also on writing comprehensive **JavaDocs**, ensuring the code was well-documented to meet professional standards. This helped 
reinforce industry practices like clear API documentation and modular coding.

One of the most rewarding parts of this project was applying real-world architectural principles within a Java EE ecosystem. The entire application was developed 
using JSP and Servlets, giving me hands-on experience with backend web technologies that underpin many enterprise systems.
Deployment and testing were done on an Apache Tomcat server, which introduced me to configuring and managing a local Java servlet container. This helped bridge 
the gap between code and actual production environments.
The application was structured using the Model-View-Controller (MVC) design pattern, which kept the logic cleanly separated and easier to debug or scale. 
I used JSPs for front-end rendering, and Servlets for the controller logic, which really drove home the benefits of a layered architecture.
I also incorporated session tracking and basic user authentication, which taught me about managing user state and controlling access in a stateless HTTP environment. 
This added a layer of practical security concerns to the mix and helped mimic how actual systems handle logins.
As a byproduct, I was learning how to use GitHub properly due to the large scale of this assignment. GitHub allowed me to easily rollback my changes when I created 
irreversible damage within the codebase.

Finally, I placed a strong emphasis on JavaDocs. Every class, method, and module was carefully documented — not just to satisfy the academic requirement, 
but because it helped me internalize the value of readable, maintainable code. Writing clear documentation made me more aware of how each component fit into 
the overall system, as Java has a reputation for being quite verbose and complex.
This experience gave me firsthand exposure to enterprise-grade backend development in Java and laid a strong foundation for understanding how large-scale 
Java-based systems are structured and deployed in the real world. Although the tech may now be outdated, this project — and my professor’s guidance — 
left a lasting impression on me. It was eye-opening to realize that a full web application could be built purely using Java. That curiosity has stuck with me since.

### Sources
---
- **Source Code:** [GitHub Repository](https://github.com/RamiyanGangatharan/Web-Development-Enterprise)
`;

export default function Article() {
  return <MDP title="Java Enterprise" article={JavaEE} />;
}
