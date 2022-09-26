import { API_NEWS_URL } from "./constants";
import { API_LANG } from "./constants";
import { API_KEY } from "./constants";

const headlinesNewsContentElem = document.getElementById("headlinesNewsContent");

const displayContent = () => {
    displayHeadlines();
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