import { API_KEY, API_LANG, API_NEWS_URL, ARTICLE_PER_COMPONENT_GOSSIP, ARTICLE_PER_COMPONENT_HEADLINES, ARTICLE_PER_COMPONENT_LIFESTYLE, ARTICLE_PER_COMPONENT_MOST_VIEWED, ARTICLE_PER_COMPONENT_OPINION, ARTICLE_PER_COMPONENT_SCIENCE, GOSSIP_SECTION_CONTENT, HEADLINES_SECTION_CONTENT, LIFESTYLE_SECTION_CONTENT, MOST_VIEWED_SECTION_CONTENT, OPINION_SECTION_CONTENT, SCIENCE_SECTION_CONTENT } from "./constants";
import { ApiRequestDetails } from "./types";
import { LOCAL_STORAGE_NAME as FAVORITE_ARTICLES_LOCAL_STORAGE_NAME } from './constants';

const storage = window.localStorage;

export const storageService = {
  initializeDataForFavoriteArticles: () => {
    if (storage.getItem(FAVORITE_ARTICLES_LOCAL_STORAGE_NAME) === null) {
      storage.setItem(FAVORITE_ARTICLES_LOCAL_STORAGE_NAME, JSON.stringify([]));
    }
  },
  getData: (storageName?: string) => JSON.parse(storage.getItem(storageName ? storageName : FAVORITE_ARTICLES_LOCAL_STORAGE_NAME)),
  setData: (data:any, storageName?: string) => storage.setItem(storageName ? storageName : FAVORITE_ARTICLES_LOCAL_STORAGE_NAME, JSON.stringify(data)),
};

export const dataService = {

    fetchData: async (action:string, params: Map<string, string | number> = new Map<string, string | number >): Promise<any> => {
        let keyword = params.get('keywords');
        const storageData = storageService.getData(`${keyword}`);
        if(!storageData) {
          const response = await dataService.makeRequest(action, params);
          storageService.setData(response, `${keyword}`);
          return response;
        }
        return storageData;
    },

    makeRequest: async (action:string, params: Map<string, string | number> = new Map<string, string | number >): Promise<any> => {
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
    },
    
    
    getData: async (requestDetails: ApiRequestDetails): Promise<any> => {
        const {news} = await dataService.fetchData(requestDetails.endpoint, requestDetails.queryParams);
        return news.filter((article:any) => article.image !== "None").filter((article:any, index:number) => index < Number(requestDetails.queryParams.get("limit")));
    }
}

const cacheData = () => {
  setTimeout( async () => {
    console.log("STARTED CACHING");
    const headlinesSectionContent =  await dataService.makeRequest("search", new Map([["keywords", HEADLINES_SECTION_CONTENT], ["limit", `${ARTICLE_PER_COMPONENT_HEADLINES}`]]));
    storageService.setData(headlinesSectionContent, HEADLINES_SECTION_CONTENT);
    const lifestyleSectionContent =  await dataService.makeRequest("search",new Map([["keywords", LIFESTYLE_SECTION_CONTENT], ["limit", `${ARTICLE_PER_COMPONENT_LIFESTYLE}`]]));
    storageService.setData(lifestyleSectionContent, LIFESTYLE_SECTION_CONTENT);
    const opinionSectionContent =  await dataService.makeRequest("search",new Map([["keywords", OPINION_SECTION_CONTENT], ["limit", `${ARTICLE_PER_COMPONENT_OPINION}`]]));
    storageService.setData(opinionSectionContent, OPINION_SECTION_CONTENT);
    const scienceSectionContent =  await dataService.makeRequest("search", new Map([["keywords", SCIENCE_SECTION_CONTENT], ["limit", `${ARTICLE_PER_COMPONENT_SCIENCE}`]]));
    storageService.setData(scienceSectionContent, SCIENCE_SECTION_CONTENT);
    const gossipSectionContent =  await dataService.makeRequest("search",new Map([["keywords", GOSSIP_SECTION_CONTENT], ["limit", `${ARTICLE_PER_COMPONENT_GOSSIP}`]]));
    storageService.setData(gossipSectionContent, GOSSIP_SECTION_CONTENT);
    const mostViewedSectionContent =  await dataService.makeRequest("search",new Map([["keywords", MOST_VIEWED_SECTION_CONTENT], ["limit", `${ARTICLE_PER_COMPONENT_MOST_VIEWED}`]]));
    storageService.setData(mostViewedSectionContent, MOST_VIEWED_SECTION_CONTENT);
    console.log("Data CACHED");
    cacheData();
    // caching every 31 minutes 1900000
    // caching every 5 minutes 300000
    // caching every 10 minutes 600000
  }, 600000)
}

cacheData();