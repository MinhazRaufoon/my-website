import styles from "../styles/ProjectCard.module.scss";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as WebsiteIcon } from "../assets/website.svg";
import { ReactComponent as YoutubeIcon } from "../assets/youtube.svg";

export function ProjectCard() {
  return (
    <div className={styles.container}>
      <h3 className={styles.projectCategoryLabel}>Web app</h3>
      <div
        className={styles.projectImage}
        style={{
          backgroundImage: `url(https://a.cdn-hotels.com/gdcs/production109/d558/8a022494-34d3-4e17-b2ea-2116941e70eb.jpg?impolicy=fcrop&w=800&h=533&q=medium)`,
        }}
      />
      <h1>Project title</h1>
      <h3>Project subtitle</h3>

      <div className={styles.skills}>
        {["React.js", "Node.js"].map((skill) => (
          <label key={skill}>{skill}</label>
        ))}
      </div>

      <div className={styles.actions}>
        <a
          href="https://www.linkedin.com/in/raufoon/"
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
