import projectsData from "./projects.json";

// Map image paths since JSON can't use require()
const projectsWithImages = projectsData.projects.map((project) => ({
  ...project,
  image: require(`../pages/components/images/projectimg/${project.image}`),
  screenshots: project.screenshots.map((screenshot) =>
    require(`../pages/components/images/projectimg/${screenshot}`),
  ),
}));

export default projectsWithImages;
