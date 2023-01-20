import { FancyCard } from "../components/FancyCard";
import styles from "../styles/AboutMe.module.scss";

export function AboutMe() {
  return (
    <FancyCard>
      <div className={styles.welcomeDetails}>
        <h2>I am a software engineer & student.</h2>

        <h2 style={{ lineHeight: "3rem" }}>
          I am good at <span>Automotive Software Development</span>,{" "}
          <span>Radar Signal Processing</span>, and{" "}
          <span>Full-Stack Development.</span>
        </h2>

        <div className={styles.buttonSet}>
          <button>View my projects</button>
          <button>Download my resume</button>
        </div>
      </div>
    </FancyCard>
  );
}
