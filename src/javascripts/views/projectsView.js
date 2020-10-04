import projectData from '../helpers/data/projectData';
import projectMaker from '../components/project';

const projectsView = () => {
  projectData.getProjects()
    .then((response) => {
      response.forEach((item) => {
         $('.right-names').append(projectMaker.createProjectCards(item));
        console.warn(item);
      });
    });
};

export default { projectsView };
