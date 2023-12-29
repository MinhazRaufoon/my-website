import { FancyCard } from "../components/FancyCard";
import styles from "../styles/AboutMe.module.scss";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin.svg";
import { ReactComponent as XingIcon } from "../assets/xing.svg";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { NavLink } from "react-router-dom";

const profilePictures = [
  "https://i.imgur.com/v6LxUyK.jpg",
  "https://i.imgur.com/wzFfnW3.jpg",
];

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
        <h2>I am an Automotive Software Engineer</h2>

        <h3 style={{ lineHeight: "3rem" }}>
          I have good knowledge and professional experience in parallel programming with <span>CUDA</span> and <span>C++</span>. 
          At present, I am working in the <span>automotive</span> industry as a software engineer for <span>radar</span> signal processing.
        </h3>

        <h4>
          Want a conversation? Email me at <b>minhaz.raufoon.1567@gmail.com</b>
        </h4>

        <div className={styles.buttonSet}>
          <NavLink to="/projects">View my projects</NavLink>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/minraufoon.appspot.com/o/Lebenslauf___Minhaz_Raufoon___latest.pdf?alt=media&token=2303e79b-1e4a-4761-af0c-aa1a830c5f00"
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
