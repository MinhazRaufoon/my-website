import { useCallback, useState } from "react";
import { ProjectsPageHeader } from "../components/ProjectsPageHeader";
import { ProjectTypeFilter } from "../types";

export function Projects() {
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
    <>
      <ProjectsPageHeader
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        skillFilters={skillFilters}
        addSkillFilter={addSkillFilter}
        removeSkillFilter={removeSkillFilter}
      />
    </>
  );
}
