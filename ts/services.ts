import { API_KEY, API_LANG, API_NEWS_URL } from "./constants";

export const getNews = async (action:string, params: Map<string, string | number> = new Map<string, string | number >): Promise<any> => {
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

