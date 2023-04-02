import { RaspnetProject } from "./projects/RaspnetProject";
import styles from "../styles/ProjectModal.module.scss";
import { MouseEventHandler } from "react";

type Props = {
  projectId: string;
  onClickOutside: Function;
};

export function ProjectModal(props: Props) {
  const { projectId, onClickOutside } = props;

  return (
    <div
      className={styles.container}
      onClick={onClickOutside as MouseEventHandler}
    >
      <div className={styles.inner} onClick={(e) => e.stopPropagation()}>
        {projectId === "raspnet" && <RaspnetProject />}
      </div>
    </div>
  );
}
