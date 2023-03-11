import { FancyCard } from "../components/FancyCard";
import styles from "../styles/AboutMe.module.scss";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin.svg";
import { ReactComponent as XingIcon } from "../assets/xing.svg";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { NavLink } from "react-router-dom";

const profilePictures = [
  "https://i.imgur.com/v6LxUyK.jpg",
  "https://i.imgur.com/wzFfnW3.jpg"
]

export function AboutMe() {
  return (
    <FancyCard
      posterUrl={profilePictures[0]}
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

        <h4>
          Want a conversation? Email me at <b>minhaz.raufoon.1567@gmail.com</b>
        </h4>

        <div className={styles.buttonSet}>
          <NavLink to="/projects">View my projects</NavLink>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/mraufoon.appspot.com/o/Lebenslauf.pdf?alt=media&token=4507f39e-bc2c-4660-b39d-b1c216fb88a1"
            download={"Lebenslauf_Minhaz_Raufoon.pdf"}
            target="_blank"
            rel="noreferrer"
          >
            Download my resume
          </a>
        </div>
      </div>
    </FancyCard>
  );
}
