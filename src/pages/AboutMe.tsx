import { FancyCard } from "../components/FancyCard";
import styles from "../styles/AboutMe.module.scss";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin.svg";
import { ReactComponent as XingIcon } from "../assets/xing.svg";
import { ReactComponent as GithubIcon } from "../assets/github.svg";

export function AboutMe() {
  return (
    <FancyCard
      actions={
        <>
          <a
            className={styles.socialLink}
            href="https://www.linkedin.com/in/raufoon/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon />
          </a>
          <a
            className={styles.socialLink}
            href="https://www.xing.com/profile/Minhaz_Raufoon/cv"
            target="_blank"
            rel="noreferrer"
          >
            <XingIcon />
          </a>
          <a
            className={styles.socialLink}
            href="https://github.com/MinhazRaufoon"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
        </>
      }
    >
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
