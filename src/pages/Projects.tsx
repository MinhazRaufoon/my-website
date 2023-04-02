import { useEffect, useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { Project } from "../types";
import styles from "../styles/Projects.module.scss";
import { getDatabase, ref, child, get } from "firebase/database";
import { ProjectModal } from "../components/ProjectModal";

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
  const [focusedProjectId, setFocusedProjectId] = useState<string | null>(
    "raspnet"
  );

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
    <div className={styles.projects}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClickMore={() => setFocusedProjectId(project.id)}
        />
      ))}
      {focusedProjectId !== null && (
        <ProjectModal
          projectId={focusedProjectId}
          onClickOutside={() => setFocusedProjectId(null)}
        />
      )}
    </div>
  );
}
