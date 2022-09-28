import { ARTICLE_PER_COMPONENT_GOSSIP, ARTICLE_PER_COMPONENT_HEADLINES, ARTICLE_PER_COMPONENT_LIFESTYLE, ARTICLE_PER_COMPONENT_MOST_VIEWED, ARTICLE_PER_COMPONENT_OPINION, ARTICLE_PER_COMPONENT_SCIENCE } from './constants';
import {getNews} from './services'
import { URLDetails } from './types';
import { componentDisplayHandler } from './view';

//TODO FIGURE OUT HOW TO REFACTOR INIT METHODS
const init = () => {
    const urlDetails = [
        {endpoint: "search",queryParams: new Map([["keywords", "headlines"], ["limit", `${ARTICLE_PER_COMPONENT_HEADLINES}`]])},
    ]

    urlDetails.forEach(async (detail) => {
        const articles = await getArticles(detail);
        componentDisplayHandler.displayHeadlines(articles);
    });

    initOpinion();
    initScience();
    initGossip();
    initLifestyle();
    initMostViewed();
};
const initOpinion = async ():Promise<void> => {
    const urlDetails: URLDetails = {
        endpoint: "search",
        queryParams: new Map([["keywords", "opinion"], ["limit", `${ARTICLE_PER_COMPONENT_OPINION}`]]),
    }
    const articles = await getArticles(urlDetails);
    componentDisplayHandler.displayOpinion(articles);
};

const initScience = async ():Promise<void> => {
    const urlDetails: URLDetails = {
        endpoint: "search",
        queryParams: new Map([["keywords", "science"], ["limit", `${ARTICLE_PER_COMPONENT_SCIENCE}`]]),
    }
    const articles = await getArticles(urlDetails);
    componentDisplayHandler.displayScience(articles);
};

const initGossip = async ():Promise<void> => {
    const urlDetails: URLDetails = {
        endpoint: "search",
        queryParams: new Map([["keywords", "gossip"], ["limit", `${ARTICLE_PER_COMPONENT_GOSSIP}`]]),
    }
    const articles = await getArticles(urlDetails);
    componentDisplayHandler.displayGossip(articles);
};

const initLifestyle = async (): Promise<void> => {
    const urlDetails: URLDetails = {
        endpoint: "search",
        queryParams: new Map([["keywords", "lifestyle"], ["limit", `${ARTICLE_PER_COMPONENT_LIFESTYLE}`]]),
    }
    const articles = await getArticles(urlDetails);
    componentDisplayHandler.displayLifestyle(articles);
 };

 
 const initMostViewed = async () => {
    const urlDetails: URLDetails = {
        endpoint: "search",
        queryParams: new Map([["keywords", "programming"], ["limit", `${ARTICLE_PER_COMPONENT_MOST_VIEWED}`]]),
    }
    const articles = await getArticles(urlDetails);
    componentDisplayHandler.displayMostViewed(articles);
 };


const getArticles = async (urlDetails: URLDetails): Promise<any> => {
    const {news} = await getNews(urlDetails.endpoint, urlDetails.queryParams);
    return news.filter((article:any) => article.image !== "None").filter((article:any, index:number) => index < Number(urlDetails.queryParams.get("limit")));
}

init();