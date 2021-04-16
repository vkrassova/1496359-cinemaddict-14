import { createSiteMenuTemplate } from './view/menu.js';
import { createFilmCardTemplate } from './view/film-card.js';
import { createFilmInformationTemplate } from './view/film-information.js';
import { createShowMoreButtonTemplate } from './view/showmore-button.js';
import { createUserRankTemplate } from './view/user-rank.js';
import { createFilmListTemplate } from './view/film-list.js';
import { createMostCommentedListTemplate } from './view/most-commented-list.js';
import { createTopRatedListTemplate } from './view/top-rated-list.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteBodyElement = document.querySelector('body');

render(siteMainElement, createSiteMenuTemplate(), 'afterbegin');
render(siteHeaderElement, createUserRankTemplate(), 'beforeend');
render(siteBodyElement, createFilmInformationTemplate(), 'beforeend');
render(siteMainElement, createFilmListTemplate(), 'beforeend');

const allMoviesList = siteMainElement.querySelector('.films-list__container');

for (let i = 0; i < 5; i++) {
  render(allMoviesList, createFilmCardTemplate(), 'beforeend');
}

const contentFilmSection = document.querySelector('.films');
render(contentFilmSection, createShowMoreButtonTemplate(), 'beforeend');
render(contentFilmSection, createMostCommentedListTemplate(), 'beforeend');
render(contentFilmSection, createTopRatedListTemplate(), 'beforeend');

const extraFilmLists = document.querySelectorAll('.films-list--extra');

const topRatedList = extraFilmLists[0].querySelector('.films-list__container');
const mostCommented = extraFilmLists[1].querySelector('.films-list__container');

for (let i = 0; i < 2; i++) {
  render(topRatedList, createFilmCardTemplate(), 'beforeend');
  render(mostCommented, createFilmCardTemplate(), 'beforeend');
}
