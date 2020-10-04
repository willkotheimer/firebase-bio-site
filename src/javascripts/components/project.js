import projects from '../helpers/data/projectData';
// import utilities from './utilities';
import bio from './bio';
import timeline from './timeline';

const createProjectCards = (array, index) => {
  $('.inner-project').html('');
  const myString = `<div class='projectCard'>
            <div class='screenshot project-${index}'></div>
            <div class='title'>${array.title}</div>
            <div class='description'>${array.description}</div>
            <div class='technologiesUsed'>${array.technologiesUsed}</div>
            <div class='url'><a href='${array.url}'>${array.title} Site</a></div>
            <div class='githubUrl'><a href='${array.githubUrl}'>${array.githubUrl}</a></div>
            </div>
            `;
  $('.inner-project').html(myString);
};

const makeButtons = (item, index) => {
  let myString = '';
  myString += `<div class='project-button' id='add-${index}'>${item.title}</div>`;
  return myString;
};

const printButtons = () => {
  projects.getProjects()
    .then((response) => {
      let myString = `<div class='bio-button' id='bio'>Bio</div>
      <div class='timeline-button' id='timeLine'>Timeline</div>
     <div class='ProjectButtons'>Projects:</div>`;

      const projectsArray = response.data;
      Object.values(response.data).forEach((item, index) => {
        console.warn(item);
        myString += makeButtons(item, index);
      });
      // myString += bio.bio();
      $('.right-names').append(myString);
      $('body').on('click', '.project-button', (e) => {
        const selected = Number(e.target.id.split('-')[1]);
        createProjectCards(projectsArray[`project${selected}`], selected);
      });
      $('body').on('click', '.bio-button', () => {
        bio.printBio();
      });
      $('body').on('click', '.timeline-button', () => {
        timeline.printTimeLine();
      });
    });
};

export default { createProjectCards, printButtons };
