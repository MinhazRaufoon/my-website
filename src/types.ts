
type ProjectType = 
| "all"
| "website"
| "full-stack-web"
| "desktop-app"
| "embedded-software";

export type ProjectTypeFilter = ProjectType;


export type Project = {
  category: ProjectType,
}