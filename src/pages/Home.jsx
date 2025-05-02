import { useState, useEffect, useMemo, useRef } from "react";
import "../css/home.css";

/**
 * `Home` is the landing component of the portfolio site.
 * It displays a dynamic typing effect that cycles through various titles,
 * showcasing Ramiyan's skills and roles.
 *
 * @component
 * @returns {JSX.Element} The homepage section with animated title text.
 */
function Home() {
  /**
   * List of professional titles to cycle through.
   * Memoized to avoid unnecessary re-renders.
   * @type {string[]}
   */
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

  /** @type {[string, Function]} */
  const [currentTitle, setCurrentTitle] = useState("");

  /** @type {[number, Function]} */
  const [index, setIndex] = useState(0);

  /** Typing effect speeds (ms) */
  const typingSpeed = 150;
  const pauseTime = 100;
  const eraseSpeed = 20;

  /**
   * Holds the current string being typed or erased without triggering re-renders.
   * @type {React.MutableRefObject<string>}
   */
  const titleRef = useRef("");

  /**
   * Optional: ref to the container, can be used to handle visual transitions.
   * @type {React.MutableRefObject<HTMLDivElement | null>}
   */
  const titleContainerRef = useRef(null);

  useEffect(() => {
    let typingTimeout;
    let eraseTimeout;

    /**
     * Begins typing the current title character by character.
     */
    const typeTitle = () => {
      const title = titles[index];
      let charIndex = 0;

      const typeChar = () => {
        if (charIndex < title.length) {
          titleRef.current += title.charAt(charIndex);
          setCurrentTitle(titleRef.current);
          charIndex++;
          typingTimeout = setTimeout(typeChar, typingSpeed);
        } else {
          eraseTitle();
        }
      };

      /**
       * Erases the current title character by character before switching to the next.
       */
      const eraseTitle = () => {
        let eraseIndex = title.length - 1;

        const eraseChar = () => {
          if (eraseIndex >= 0) {
            titleRef.current = titleRef.current.slice(0, eraseIndex);
            setCurrentTitle(titleRef.current);
            eraseIndex--;
            eraseTimeout = setTimeout(eraseChar, eraseSpeed);
          } else {
            // Switch to next title
            setIndex((prevIndex) => (prevIndex + 1) % titles.length);
          }
        };

        eraseChar();
      };

      titleRef.current = "";
      typeChar();
    };

    typeTitle();

    // Cleanup timers on unmount or index update
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
