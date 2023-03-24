import { useCallback, useEffect, useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectsPageHeader } from "../components/ProjectsPageHeader";
import { Project, ProjectTypeFilter } from "../types";
import styles from "../styles/Projects.module.scss";
import { getDatabase, ref, onValue } from "firebase/database";

async function loadProjects() {
  const projectsFromSS = sessionStorage.getItem("projects");

  if (projectsFromSS) return JSON.parse(projectsFromSS);

  return new Promise((res, rej) => {
    const db = getDatabase();
    const projectsRef = ref(db, "v1/projects");

    onValue(projectsRef, (snapshot) => {
      const projectsData = snapshot.val();
      sessionStorage.setItem(
        "projects",
        JSON.stringify(Object.values(projectsData))
      );
      res(Object.values(projectsData));
    });
  });
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>(
    JSON.parse(sessionStorage.getItem("projects") || "[]") || []
  );

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
    loadProjects().then((projects) => setProjects(projects));
  }, []);

  return (
    <>
      <br />
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
