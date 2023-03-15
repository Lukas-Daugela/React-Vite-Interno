export const filterProjects = (projects, category) => {
  return projects.filter((project) => {
    return project.placeCategory === category;
  });
};
