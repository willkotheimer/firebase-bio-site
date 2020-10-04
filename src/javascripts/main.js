import firebase from 'firebase/app';
import apiKeys from './helpers/data/apiKeys.json';
// import projects from './helpers/data/projectData';
import projectsPublish from './components/project';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  projectsPublish.printButtons();
  // projectsPublish.createProjectCards(projects.getProjects());
};

init();
