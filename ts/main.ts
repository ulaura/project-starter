import { API_NEWS_URL } from "./constants";
import { API_LANG } from "./constants";
import { API_KEY } from "./constants";

const headlinesNewsContentElem = document.getElementById("headlinesNewsContent");
const opinionNewsContentElem = document.getElementById("opinionNewsContent");
const scienceNewsContentElem = document.getElementById("scienceNewsContent");
const gossipNewsContentElem = document.getElementById('gossipNewsContent');
const lifestyleNewsContentElem = document.getElementById('lifestyleNewsContent');
const mostViewedNewsContentElem = document.getElementById('mostViewedNewsContent');

const displayContent = () => {
    displayHeadlines();
    displayOpinion();
};

const displayHeadlines = async ():Promise<void> => {
    const {news} = await getNews("search", undefined,  new Map([["keywords", "headlines"]]));
    const articles = news.filter((article:any, index:number) => index < 4);
    const headlinesImageElem = headlinesNewsContentElem?.querySelector(".headlines__image");
    headlinesImageElem?.setAttribute("src", `${articles[1].image}`);
    const headlineArticleTitleElem = headlinesNewsContentElem?.getElementsByClassName("headline__article__title");
    const headlineArticlePubDateElem = headlinesNewsContentElem?.getElementsByClassName("headline__article__pub__date");

    articles.length >= 4 && articles.forEach((article:any, index:number) => {
        headlineArticleTitleElem![index].textContent = article.title;
        headlineArticlePubDateElem![index].textContent = article.published.split(" ")[0].replaceAll('-', '/');
    });


};

const displayOpinion = async ():Promise<void> => {
    const {news} = await getNews("search", undefined, new Map([["keywords", "opinion"]]));
    const articles = news.filter((article:any, index:number) => index < 3);
    const opinionImageElem = opinionNewsContentElem?.getElementsByClassName("opinion__image");
    const opinionArticleAuthorElem = opinionNewsContentElem?.getElementsByClassName("opinion__article__author");
    const opinionArticleDescription = opinionNewsContentElem?.getElementsByClassName("opinion__article__description");
    const opinionArticlePubDateElem = opinionNewsContentElem?.getElementsByClassName("opinion__article__pub__date");

    articles.length >= 3 && articles.forEach((article:any, index:number) => {
        opinionImageElem![index].setAttribute("src", article.image);
        opinionArticleAuthorElem![index].textContent = article.author;
        opinionArticleDescription![index].textContent = article.description;
        opinionArticlePubDateElem![index].textContent = article.published.split(' ')[0].replaceAll('-', '/');
    });
};

const getNews = async (action:string, maxNews:number = 30, params: Map<string, string | number> = new Map<string, string | number >): Promise<any> => {
    params.set("limit", maxNews);
    params.set("language", `${API_LANG}`);
    params.set("apiKey", `${API_KEY}`);
    const apiParams = new Array<string>;

    params.forEach((value, key) => {
        apiParams.push(`${key}=${value}`);
    });
    const strParams = apiParams.join("&");
    const url = `${API_NEWS_URL}/${action}?${strParams}`;
    let response: Response = await fetch(url);
    let news: any = response.json();
 return news;
};

displayContent();