import { useCallback, useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectsPageHeader } from "../components/ProjectsPageHeader";
import { ProjectTypeFilter } from "../types";
import styles from "../styles/Projects.module.scss";

export function Projects() {
  const [typeFilter, setTypeFilter] = useState<ProjectTypeFilter>("all");
  const [skillFilters, setSkillFilters] = useState<string[]>([]);

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
    <>
      <span>This page is still under development</span>
      <ProjectsPageHeader
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        skillFilters={skillFilters}
        addSkillFilter={addSkillFilter}
        removeSkillFilter={removeSkillFilter}
      />
      <div className={styles.projects}>
        <ProjectCard />
      </div>
    </>
  );
}
