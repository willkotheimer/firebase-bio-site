# Week 12 - PORTFOLIO SITE SERVED WITH FIREBASE
This was a collaborative effort to design a faux page displaying/selling a style of pants of our choice

## Motivation
The motivation behind this project was to bring my skills in firebase to bear on my personal portfolio site. This mission was more than accomplished as I was able to practice axios and api calls, as well.

## Build status
MVP complete
## Code Style
Vanilla Javascript ES6, HTML5, SCSS, Axios, Firebase

## Screenshots
<img width="1257" alt="Gif showing features of site" src="https://github.com/willkotheimer/firebase-bio-site/blob/main/portfolio.gif?raw=true">

## Url
[https://modest-jang-429cf7.netlify.app/](https://modest-jang-429cf7.netlify.app/)

## Features
This site features intergration with firebase, which serves as a backend service and database that sends information about my projects to it.
New to this revision of the site is splitting off my bio page into a separate page of the single page app, a new button that will be used for my timeline and work history, and some more styling to go with each of these to improve the user experience.

## Code Example
```             // Axios GET method
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

```
## The Team
[Will Kotheimer](https://github.com/willkotheimer)

