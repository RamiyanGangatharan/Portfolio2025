import { useState, useEffect, useMemo, useRef } from "react";
import '../css/home.css';

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
    []
  );

  const [currentTitle, setCurrentTitle] = useState("");
  const [index, setIndex] = useState(0);
  const typingSpeed = 150; // Speed of typing effect
  const pauseTime = 100; // Time the title stays before switching
  const eraseSpeed = 20; // Speed for erasing

  const titleRef = useRef(""); // Using useRef to hold the current title during typing
  const titleContainerRef = useRef(null); // To prevent flickering on the container

  useEffect(() => {
    let typingTimeout;
    let eraseTimeout;

    // Function to type each title
    const typeTitle = () => {
      const title = titles[index];
      let charIndex = 0;

      // Function to start typing the current title
      const typeChar = () => {
        if (charIndex < title.length) {
          titleRef.current += title.charAt(charIndex); // Update titleRef directly
          setCurrentTitle(titleRef.current); // Sync with state for render
          charIndex++;
          typingTimeout = setTimeout(typeChar, typingSpeed);
        } else {
          eraseTitle();
        }
      };

      // Function to erase the current title
      const eraseTitle = () => {
        let eraseIndex = title.length - 1;

        const eraseChar = () => {
          if (eraseIndex >= 0) {
            titleRef.current = titleRef.current.slice(0, eraseIndex); // Erase from titleRef
            setCurrentTitle(titleRef.current); // Sync with state for render
            eraseIndex--;
            eraseTimeout = setTimeout(eraseChar, eraseSpeed);
          } else {
            // Move to the next title
            setIndex((prevIndex) => (prevIndex + 1) % titles.length);
          }
        };

        eraseChar();
      };

      titleRef.current = ""; // Clear the title before starting to type
      typeChar(); // Start typing the current title
    };

    // Start the typing effect
    typeTitle();

    // Clear all timeouts on cleanup
    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(eraseTimeout);
    };
  }, [index, titles]);

  return (
    <div>
      <div className="home-container">
      <section id="home">
        <div className="hero-content">
          <p className="intro-greeting">Greetings Visitor, My Name Is</p>
          <h1 className="intro-name">RAMIYAN G.</h1>
          <div ref={titleContainerRef} className="career-ticker">
            <p className="typing-effect">{currentTitle}</p>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Home;
