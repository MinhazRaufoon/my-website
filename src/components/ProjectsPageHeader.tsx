import { Fragment, useState, useCallback } from "react";
import styles from "../styles/ProjectsPageHeader.module.scss";
import { ProjectSkillFilter } from "./ProjectSkillFilter";

type ProjectTypeFilter =
  | "all"
  | "web-app"
  | "desktop-app"
  | "embedded-software";

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

export function ProjectsPageHeader() {
  const [isFilterPanelVisible, setFilterPanelVisible] = useState<boolean>(true);
  const [typeFilter, setTypeFilter] = useState<ProjectTypeFilter>("all");
  const [skillFilters, setSkillFilters] = useState<string[]>(["React.js"]);

  const addSkillFilter = useCallback((skill: string) => {
    setSkillFilters((prev) => [...prev, skill]);
  }, []);

  const removeSkillFilter = useCallback((skill: string) => {
    setSkillFilters((prev) => {
      const indexOfFilterToDelete = prev.indexOf(skill);

      if (indexOfFilterToDelete > -1) {
        const result = [...prev];
        result.splice(indexOfFilterToDelete, 1);
        return result;
      }

      return prev;
    });
  }, []);

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
