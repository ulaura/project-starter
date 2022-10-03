import { pageContent } from './components/content/page-content';
import { pageFooter } from './components/page-footer';
import { pageHeader } from './components/page-header';
import {storageService} from './services'

const root = document.getElementById("root");
//TODOs
 //1. Learn how to use classes, interfaces and inheritance for components

const init = async () => {
  storageService.initializeDataForFavoriteArticles();

  root.innerHTML += pageHeader.getContent();
  root.innerHTML += await pageContent.getContent();
  root.innerHTML += pageFooter.getContent();

  pageHeader.initEventHandlers(displayFavoritePage, displayNewsPage);
  pageContent.initEventHandlers();
  pageFooter.initEventHandlers();
};

const displayFavoritePage  = () => {
   pageContent.displayContent("favorite");
}

const displayNewsPage = () => {
  pageContent.displayContent("home");
}


init();