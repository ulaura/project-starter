import { ARTICLE_PER_COMPONENT_OPINION, OPINION_SECTION_CONTENT } from "../../../constants";
import { dataService } from "../../../services";
import { articleHeader } from "./common/section-header";

const SECTION_TITLE = "Opinion"
const PARENT_ID = "opinionNewsContent";
let articles: Array<any> = [];

export const opinion = {
    
    getContent: async () => {

        articles = await dataService.getData({endpoint: "search", queryParams: new Map([["keywords", OPINION_SECTION_CONTENT], ["limit", `${ARTICLE_PER_COMPONENT_OPINION}`]])});

        return `
        <section class="mt-5">
        ${articleHeader.getContent(SECTION_TITLE)}
        <section class="d-flex direction__column" id="${PARENT_ID}">
            <article class="width__one__third bx__none full__width pt-3 px-3 position-relative">
                <header>
                    <img src="${articles[0].image}" alt="Miško Hevery" class="w-100 opinion__image"/>
                    <h2 class="display__text__blue fs-6 mt-2 opinion__article__author">${articles[0].author}</h2>
                </header>
                <p class="mb-1 opinion__article__description d-inline">${articles[0].description}</p>
                <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[0].id}"></i></span>
                <small class="text-muted d-block opinion__article__pub__date">${articles[0].published.split(" ")[0].replaceAll('-', '/')}</small>
            </article>
            <article class="width__one__third bx__none full__width pt-3 border-start border-end border-2 px-3 position-relative">
                <header>
                    <img src="${articles[1].image}" alt="Jordan Walke" class="w-100 opinion__image"/>
                    <h2 class="display__text__blue fs-6 mt-2 opinion__article__author">${articles[1].author}</h2>
                </header>
                <p class="mb-1 opinion__article__description d-inline">${articles[1].description}</p>
                <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[1].id}"></i></span>
                <small class="text-muted d-block opinion__article__pub__date">${articles[1].published.split(" ")[0].replaceAll('-', '/')}</small>
            </article>
            <article class="width__one__third bx__none full__width pt-3 px-3 position-relative">
                <header>
                    <img src="${articles[2].image}" alt="Tim Berners-Lee" class="w-100 opinion__image"/>
                    <h2 class="display__text__blue fs-6 mt-2 opinion__article__author">${articles[2].author}</h2>
                </header> 
                <p class="mb-1 opinion__article__description d-inline">${articles[2].description}</p>
                <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[2].id}"></i></span>
                <small class="text-muted d-block opinion__article__pub__date">${articles[2].published.split(" ")[0].replaceAll('-', '/')}</small>
            </article>
        </section>
    </section>
        `;
    },

    initEventHandlers: (favoriteButton_onClick: Function) => {
        favoriteButton_onClick(articles, PARENT_ID);
    }
};