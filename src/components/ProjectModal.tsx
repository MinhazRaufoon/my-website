import { RaspnetProject } from "./projects/RaspnetProject";
import styles from "../styles/ProjectModal.module.scss";
import { MouseEventHandler } from "react";
import { Project } from "../types";
import { FtpProject } from "./projects/FtpProject";
import BscThesisProject from "./projects/BscThesisProject";

type Props = {
  onClickOutside: Function;
  project: Project;
};

export function ProjectModal(props: Props) {
  const { onClickOutside, project } = props;

  const content =
    project.id === "raspnet" ? (
      <RaspnetProject project={project} />
    ) : project.id === "ftp-server-and-client" ? (
      <FtpProject project={project} />
    ) : project.id === "bsc-thesis" ? (
      <BscThesisProject project={project} />
    ) : (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        "Details will be updated soon"
      </div>
    );

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
        {content}
      </div>
    </div>
  );
}
