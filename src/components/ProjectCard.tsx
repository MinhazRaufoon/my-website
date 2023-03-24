import styles from "../styles/ProjectCard.module.scss";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as WebsiteIcon } from "../assets/website.svg";
import { ReactComponent as YoutubeIcon } from "../assets/youtube.svg";
import { Project } from "../types";

type PropType = {
  project: Project;
};

const projectCategoryColorMap: any = {
  "desktop-app": "#d26d54",
};

export function ProjectCard(props: PropType) {
  const { project } = props;

  return (
    <div className={styles.container}>
      <div
        className={styles.projectImage}
        style={{
          backgroundImage: `url(${project.poster})`,
        }}
      />
      <div className={styles.projectDetails}>
        <h3
          className={styles.projectCategoryLabel}
          style={{ color: projectCategoryColorMap[project.category] }}
        >
          {project.category}
        </h3>
        <h2>{project.title}</h2>
        <h3>{project.subtitle}</h3>

        <div className={styles.skills}>
          {project.skills.map((skill) => (
            <label key={skill}>{skill}</label>
          ))}
        </div>

        <div className={styles.actions}>
          {project.links.map((link) => (
            <a key={link.type} href={link.url} target="_blank" rel="noreferrer">
              {link.type === "github" && <GithubIcon />}
              {link.type === "website" && <WebsiteIcon />}
              {link.type === "youtube" && <YoutubeIcon />}
            </a>
          ))}

          <button>More</button>
        </div>
      </div>
    </div>
  );
}
