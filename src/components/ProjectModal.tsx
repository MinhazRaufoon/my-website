import { RaspnetProject } from "./projects/RaspnetProject";
import styles from "../styles/ProjectModal.module.scss";
import { MouseEventHandler } from "react";
import { Project } from "../types";
import { FtpProject } from "./projects/FtpProject";

type Props = {
  onClickOutside: Function;
  project: Project;
};

export function ProjectModal(props: Props) {
  const { onClickOutside, project } = props;

  return (
    <div
      className={styles.container}
      onClick={onClickOutside as MouseEventHandler}
    >
      <div className={styles.inner} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={onClickOutside as MouseEventHandler}
        >
          X
        </button>
        {project.id === "raspnet" && <RaspnetProject project={project} />}
        {project.id === "ftp-server-and-client" && (
          <FtpProject project={project} />
        )}
      </div>
    </div>
  );
}
