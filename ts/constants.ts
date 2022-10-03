import * as dotenv from 'dotenv';
dotenv.config();

export const HEADLINES_SECTION_CONTENT = "headlines";
export const OPINION_SECTION_CONTENT = "opinion";
export const SCIENCE_SECTION_CONTENT = "science";
export const GOSSIP_SECTION_CONTENT = "gossip";
export const LIFESTYLE_SECTION_CONTENT = "lifestyle";
export const MOST_VIEWED_SECTION_CONTENT = "programming";

export const LOCAL_STORAGE_FAVORITE = 'articles';

export const API_KEY = process.env.API_KEY;
export const API_NEWS_URL = "https://api.currentsapi.services/v1";
export const API_LANG = 'en';

export const ARTICLE_PER_COMPONENT_HEADLINES = 4;
export const ARTICLE_PER_COMPONENT_OPINION = 3;
export const ARTICLE_PER_COMPONENT_SCIENCE = 7;
export const ARTICLE_PER_COMPONENT_GOSSIP = 3;
export const ARTICLE_PER_COMPONENT_LIFESTYLE = 4;
export const ARTICLE_PER_COMPONENT_MOST_VIEWED= 6;