import { ARTICLE_PER_COMPONENT_GOSSIP, ARTICLE_PER_COMPONENT_HEADLINES, ARTICLE_PER_COMPONENT_LIFESTYLE, ARTICLE_PER_COMPONENT_MOST_VIEWED, ARTICLE_PER_COMPONENT_OPINION, ARTICLE_PER_COMPONENT_SCIENCE } from "./constants";
import { localStorageService } from "./services";
import { ArtElemIdentificationDetails } from "./types";

const headlinesNewsContentElem = document.getElementById("headlinesNewsContent");
const opinionNewsContentElem = document.getElementById("opinionNewsContent");
const scienceNewsContentElem = document.getElementById("scienceNewsContent");
const gossipNewsContentElem = document.getElementById('gossipNewsContent');
const lifestyleNewsContentElem = document.getElementById('lifestyleNewsContent');
const mostViewedNewsContentElem = document.getElementById('mostViewedNewsContent');

const artElemClassIdentPostfix_IMAGE = "__image";
const artElemClassIdentPostfix_TITLE = "__article__title";
const artElemClassIdentPostfix_PUBDATE = "__article__pub__date";
const artElemClassIdentPostfix_AUTHOR = "__article__author";

//TODO FIGURE OUT HOW TO REFACTOR DISPLAY METHODS
export const componentDisplayHandler = {

  displayHeadlines: (articles: Array<any>) => {
    const headlineItem: ArtElemIdentificationDetails = {
      parentElement: headlinesNewsContentElem,
      reqNoOfArt: ARTICLE_PER_COMPONENT_HEADLINES,
      ...getArticleElementIdentificationDetails("headlines"),
    };

    populateComponent(articles, headlineItem);
  },

  displayOpinion: (articles: Array<any>) => {
    const opinionItem: ArtElemIdentificationDetails = {
      parentElement: opinionNewsContentElem,
      reqNoOfArt: ARTICLE_PER_COMPONENT_OPINION,
      ...getArticleElementIdentificationDetails("opinion"),
    };
    populateComponent(articles, opinionItem);
  },

  displayScience: (articles: Array<any>) => {
    const scienceItem: ArtElemIdentificationDetails = {
      parentElement: scienceNewsContentElem,
      reqNoOfArt: ARTICLE_PER_COMPONENT_SCIENCE,
      ...getArticleElementIdentificationDetails("science"),
    };
    populateComponent(articles, scienceItem);
  },

  displayGossip: (articles: Array<any>) => {
    const gossipItem: ArtElemIdentificationDetails = {
      parentElement: gossipNewsContentElem,
      reqNoOfArt: ARTICLE_PER_COMPONENT_GOSSIP,
      ...getArticleElementIdentificationDetails("gossip"),
    };

    populateComponent(articles, gossipItem);
  },

  displayLifestyle: (articles: Array<any>) => {
    const lifestyleItem: ArtElemIdentificationDetails = {
      parentElement: lifestyleNewsContentElem,
      reqNoOfArt: ARTICLE_PER_COMPONENT_LIFESTYLE,
      ...getArticleElementIdentificationDetails("lifestyle"),
    };

    populateComponent(articles, lifestyleItem);
  },

  displayMostViewed: (articles: Array<any>) => {
    const mostViewedItem: ArtElemIdentificationDetails = {
      parentElement: mostViewedNewsContentElem,
      reqNoOfArt: ARTICLE_PER_COMPONENT_MOST_VIEWED,
      ...getArticleElementIdentificationDetails("most__viewed"),
    };

    populateComponent(articles, mostViewedItem);
  },
};

const populateComponent = (articles: Array<any>, artElemIdentificationDetails: ArtElemIdentificationDetails) => {
    const imageElem = artElemIdentificationDetails.parentElement?.getElementsByClassName(artElemIdentificationDetails.image);
    const articleTitleElem = artElemIdentificationDetails.parentElement?.getElementsByClassName(artElemIdentificationDetails.title);
    const articlePubDateElem = artElemIdentificationDetails.parentElement?.getElementsByClassName(artElemIdentificationDetails.pubDate);
    const authorElem = artElemIdentificationDetails.parentElement?.getElementsByClassName(artElemIdentificationDetails.author);

    const favoriteButtonElem = artElemIdentificationDetails.parentElement?.getElementsByClassName("favorite__button");
    
    if (articles.length >= artElemIdentificationDetails.reqNoOfArt) {
      imageElem && [...imageElem].forEach((elem: HTMLImageElement, index: number) => elem.setAttribute("src", articles[index].image));
      articleTitleElem && [...articleTitleElem].forEach((elem: HTMLAnchorElement, index: number) => elem.textContent = articles[index].title);
      articlePubDateElem && [...articlePubDateElem].forEach((elem, index: number) => elem.textContent = articles[index].published.split(" ")[0].replaceAll('-', '/'));
      authorElem && [...authorElem].forEach((elem, index: number) => elem.textContent = articles[index].author);
      favoriteButtonElem && [...favoriteButtonElem].forEach((elem, index:number) => {
        const article = articles[index];
        elem.addEventListener("click", (event:Event & {target:Element}) => {

          toggleClass(event.target, "fa-regular", "fa-solid");

          const foundArticle = localStorageService.getData().find((favArticle:any) => favArticle.id === article.id);
          if(!foundArticle) {
            localStorageService.setData([...localStorageService.getData(), article]);
          }
        }); 
      });
    };
};

const toggleClass = (element: Element, firstClass:string, secondClass:string) => {
  if(element.classList.contains(firstClass)){
    element.classList.replace(firstClass, secondClass);
  } else{
    element.classList.replace(secondClass, firstClass);
  }
};

const getArticleElementIdentificationDetails = (keyword: string): ArtElemIdentificationDetails => {

    const item: ArtElemIdentificationDetails = {
        image: keyword.concat(artElemClassIdentPostfix_IMAGE),
        title: keyword.concat(artElemClassIdentPostfix_TITLE),
        pubDate: keyword.concat(artElemClassIdentPostfix_PUBDATE),
        author: keyword.concat(artElemClassIdentPostfix_AUTHOR)
    }

    return item;
 }