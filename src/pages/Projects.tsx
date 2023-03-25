import { useCallback, useEffect, useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectsPageHeader } from "../components/ProjectsPageHeader";
import { Project, ProjectTypeFilter } from "../types";
import styles from "../styles/Projects.module.scss";
import { getDatabase, ref, child, get } from "firebase/database";

async function loadProjects() {
  const projectsFromSS = sessionStorage.getItem("projects");

  if (projectsFromSS) return JSON.parse(projectsFromSS);

  const dbRef = ref(getDatabase());

  return get(child(dbRef, `v1/projects`)).then((snapshot) => {
    if (snapshot.exists()) {
      const projectsData = snapshot.val();
      sessionStorage.setItem(
        "projects",
        JSON.stringify(Object.values(projectsData))
      );
      return Object.values(projectsData);
    } else {
      throw Error("No data");
    }
  });
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  // const [typeFilter, setTypeFilter] = useState<ProjectTypeFilter>("all");
  // const [skillFilters, setSkillFilters] = useState<string[]>([]);

  // const addSkillFilter = useCallback((skill: string) => {
  //   setSkillFilters((prev) => [...prev, skill]);
  // }, []);

  // const removeSkillFilter = useCallback((skill: string) => {
  //   setSkillFilters((prev) => {
  //     const indexOfFilterToDelete = prev.indexOf(skill);
  //     if (indexOfFilterToDelete > -1) {
  //       const result = [...prev];
  //       result.splice(indexOfFilterToDelete, 1);
  //       return result;
  //     }
  //     return prev;
  //   });
  // }, []);

  useEffect(() => {
    loadProjects().then((projects) =>
      setProjects(
        projects.sort((a: Project, b: Project) =>
          a.importance < b.importance ? 1 : -1
        )
      )
    );
  }, []);

  return (
    <>
      {/* <ProjectsPageHeader
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        skillFilters={skillFilters}
        addSkillFilter={addSkillFilter}
        removeSkillFilter={removeSkillFilter}
      /> */}
      <div className={styles.projects}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
