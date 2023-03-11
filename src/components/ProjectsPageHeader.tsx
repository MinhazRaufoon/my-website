import { Fragment, useState } from "react";
import styles from "../styles/ProjectsPageHeader.module.scss";
import { ProjectTypeFilter } from "../types";
import { ProjectSkillFilter } from "./ProjectSkillFilter";

function ProjectTypeFilterSelect(props: {
  value: ProjectTypeFilter;
  setTypeFilter: Function;
}) {
  const { value, setTypeFilter } = props;
  return (
    <select
      value={value}
      onChange={(e) => setTypeFilter(e.target.value as ProjectTypeFilter)}
    >
      <option value={"all"}>All</option>
      <option value={"desktop-app"}>Desktop app</option>
      <option value={"web-app"}>Web app</option>
      <option value={"embedded-software"}>Embedded software</option>
    </select>
  );
}

const allSkills = [
  "React.js",
  "Node.js",
  "Express.js",
  "GraphQl",
  "Java",
  "C++",
  "C",
  "Python",
  "CUDA",
];

type Props = {
  typeFilter: ProjectTypeFilter;
  setTypeFilter: Function;
  skillFilters: string[];
  addSkillFilter: Function;
  removeSkillFilter: Function;
};

export function ProjectsPageHeader(props: Props) {
  const {
    typeFilter,
    setTypeFilter,
    skillFilters,
    addSkillFilter,
    removeSkillFilter,
  } = props;

  const [isFilterPanelVisible, setFilterPanelVisible] = useState<boolean>(true);

  return (
    <div className={styles.container}>
      {isFilterPanelVisible && (
        <Fragment>
          <ProjectTypeFilterSelect
            value={typeFilter}
            setTypeFilter={setTypeFilter}
          />

          <div className={styles.skillFilterPanel}>
            {allSkills.map((skill) => {
              return skillFilters.includes(skill) ? (
                <ProjectSkillFilter
                  key={skill}
                  value={skill}
                  isSelected={true}
                  onClick={() => removeSkillFilter(skill)}
                />
              ) : (
                <ProjectSkillFilter
                  key={skill}
                  value={skill}
                  isSelected={false}
                  onClick={() => addSkillFilter(skill)}
                />
              );
            })}
          </div>
        </Fragment>
      )}
      <button onClick={() => setFilterPanelVisible((prev) => !prev)}>
        {isFilterPanelVisible ? "Hide" : "Show"} filters
      </button>
    </div>
  );
}
