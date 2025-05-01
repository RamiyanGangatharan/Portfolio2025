import { useMemo } from "react";
import "../styles.css";

function Home() {
  const titles = useMemo(
    () => [
      "SOFTWARE DEVELOPER",
      "SOFTWARE ENGINEER",
      "WEB DEVELOPER",
      "SYSTEMS DESIGNER",
      "DATABASE ARCHITECT",
      "MAINFRAME DEVELOPER (IBM)",
      "TECHNOLOGY CONSULTANT",
      "IT ANALYST",
      "COMPUTER BUILDER",
      "TECH ENTHUSIAST",
      "SHIFT SUPERVISOR, TIM HORTONS",
    ],
    [],
  );

  const tickerText = useMemo(() => titles.join("     •     "), [titles]);

  return (
    <div className="home-container">
      <section id="home">
        <div className="hero-content">
          <p className="intro-greeting">Greetings Visitor, My Name Is</p>
          <h1 className="intro-name">RAMIYAN G.</h1>
          <div className="marquee-container" aria-label="Career Titles Ticker">
            <div className="marquee-track"><span> {tickerText} • {tickerText} </span></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
