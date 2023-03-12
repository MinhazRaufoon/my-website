import styles from "../styles/ProjectCard.module.scss";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as WebsiteIcon } from "../assets/website.svg";
import { ReactComponent as YoutubeIcon } from "../assets/youtube.svg";

export function ProjectCard() {
  return (
    <div className={styles.container}>
      <h3 className={styles.projectCategoryLabel} style={{backgroundColor: "#333"}}>Desktop app</h3>
      <div
        className={styles.projectImage}
        style={{
          backgroundImage: `url(https://i.imgur.com/72nlCH7.jpg)`,
        }}
      />
      <h1>FTP server and client</h1>
      <h3>Share files with FTP</h3>

      <div className={styles.skills}>
        {["Java"].map((skill) => (
          <label key={skill}>{skill}</label>
        ))}
      </div>

      <div className={styles.actions}>
        <a
          href="https://github.com/MinhazRaufoon/Simple-FTP-Application"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/raufoon/"
          target="_blank"
          rel="noreferrer"
        >
          <WebsiteIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/raufoon/"
          target="_blank"
          rel="noreferrer"
        >
          <YoutubeIcon />
        </a>
        <button>More</button>
      </div>
    </div>
  );
}
