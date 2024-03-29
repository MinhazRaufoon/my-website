import { useCallback, useEffect, useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { Project } from "../types";
import styles from "../styles/Projects.module.scss";
import { getDatabase, ref, child, get } from "firebase/database";
import { ProjectModal } from "../components/ProjectModal";
import { useSearchParams } from "react-router-dom";

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
  const [focusedProject, setFocusedProject] = useState<Project | null>(null);

  const [search, setSearchParams] = useSearchParams();

  useEffect(() => {
    loadProjects().then((projects) =>
      setProjects(
        projects.sort((a: Project, b: Project) =>
          a.importance < b.importance ? 1 : -1
        )
      )
    );
  }, []);

  useEffect(() => {
    if (search.has("focus")) {
      const focusedProject = projects.find((p) => p.id === search.get("focus"));
      if (focusedProject) setFocusedProject(focusedProject);
    }
  }, [search, projects]);

  const clearSearch = useCallback(() => {
    setSearchParams({});
    setFocusedProject(null);
  }, [setSearchParams]);

  return (
    <div className={styles.projects}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      {focusedProject !== null && (
        <ProjectModal project={focusedProject} onClickOutside={clearSearch} />
      )}
    </div>
  );
}
