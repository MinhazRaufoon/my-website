import styles from "../styles/ProjectSkillFilter.module.scss";

export function ProjectSkillFilter(props: {
  value: string;
  isSelected?: boolean;
  onClick: any;
}) {
  const { value, isSelected = false, onClick } = props;
  return (
    <button
      className={`${styles.container} ${isSelected ? styles.selected : ""}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
