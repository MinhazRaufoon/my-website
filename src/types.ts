
type ProjectType = 
| "all"
| "website"
| "full-stack-web"
| "desktop-app"
| "embedded-software";

export type ProjectTypeFilter = ProjectType;

export type ProjectLink = {
  type: "github" | "youtube" | "website";
  url: string;
}

export type Project = {
  id: string;
  category: ProjectType;
  poster: string;
  title: string;
  subtitle: string;
  links: ProjectLink[];
  skills: string[];
  importance: number;
}