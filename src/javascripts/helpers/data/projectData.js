import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;
const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`).then((response) => {
    resolve(response);
  }).catch((error) => reject(error));
});
export default { getProjects };
