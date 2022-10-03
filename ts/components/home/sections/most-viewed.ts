import { dataService } from "../../../services";
import { ARTICLE_PER_COMPONENT_MOST_VIEWED, MOST_VIEWED_SECTION_CONTENT } from "../../../constants";
import { articleHeader } from "./common/section-header";

const SECTION_TITLE = "Most Viewed"
const PARENT_ID = "mostViewedNewsContent";
let articles: Array<any> = [];

export const mostViewed = {
    getContent: async() => {

        articles = await dataService.getData({endpoint: "search", queryParams: new Map([["keywords", MOST_VIEWED_SECTION_CONTENT], ["limit", `${ARTICLE_PER_COMPONENT_MOST_VIEWED}`]])})

        return `
        <section class="mt-5">
        ${articleHeader.getContent(SECTION_TITLE)}
        <div class="d-flex px-3 direction__column" id="${PARENT_ID}">
            <section class="w-75 me-3 most__viewed__section__grid full__width">
                <article class="most__viewed__article position-relative">
                    <a href="./post.html" class="no__style__link fw-bold most__viewed__article__title">${articles[0].title}</a>
                    <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[0].id}"></i></span>
                    <small class="d-block text-muted mt-2">
                        <span class="most__viewed__article__author">${articles[0].author}</span>
                        <span>-</span> 
                        <span class="text-muted  most__viewed__article__pub__date">${articles[0].published.split(" ")[0].replaceAll('-', '/')}</span>
                    </small>
                </article>
                <article class="most__viewed__article position-relative">
                    <a href="./post.html" class="no__style__link fw-bold most__viewed__article__title">${articles[1].title}</a>
                    <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[1].id}"></i></span>
                    <small class="d-block text-muted mt-2">
                        <span class="most__viewed__article__author">${articles[1].author}</span>
                        <span>-</span>
                        <span class="most__viewed__article__pub__date" >${articles[1].published.split(" ")[0].replaceAll('-', '/')}</span>
                    </small>
                </article>
                <article class="most__viewed__article position-relative">
                    <a href="./post.html" class="no__style__link fw-bold most__viewed__article__title">${articles[2].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[2].id}"></i></span>
                        <small class="d-block text-muted mt-2">
                        <span class="most__viewed__article__author">${articles[2].author}</span>
                        <span>-</span>
                        <span class="most__viewed__article__pub__date" >${articles[2].published.split(" ")[0].replaceAll('-', '/')}</span>
                    </small>
                </article>
                <article class="most__viewed__article position-relative">
                    <a href="./post.html" class="no__style__link fw-bold most__viewed__article__title">${articles[3].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[3].id}"></i></span>
                        <small class="d-block text-muted mt-2">
                        <span class="most__viewed__article__author">${articles[3].author}</span>
                        <span>-</span>
                        <span class="most__viewed__article__pub__date" >${articles[3].published.split(" ")[0].replaceAll('-', '/')}</span>
                    </small>
                </article>
                <article class="most__viewed__article position-relative">
                    <a href="./post.html" class="no__style__link fw-bold most__viewed__article__title">${articles[4].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[4].id}"></i></span>
                        <small  class="d-block text-muted mt-2" >
                        <span class="most__viewed__article__author">${articles[4].author}</span>
                        <span>-</span>
                        <span class="most__viewed__article__pub__date" >${articles[4].published.split(" ")[0].replaceAll('-', '/')}</span>
                    </small>
                </article>
                <article class="most__viewed__article position-relative">
                    <a href="./post.html" class="no__style__link fw-bold most__viewed__article__title">${articles[5].title}t</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[5].id}"></i></span>
                        <small class="d-block text-muted mt-2">
                        <span class="most__viewed__article__author">${articles[5].author}</span>
                        <span>-</span>
                        <span class="most__viewed__article__pub__date" >${articles[5].published.split(" ")[0].replaceAll('-', '/')}</span>
                    </small>
                </article>
            </section>
            <div class="w-25 full__width">
                <img
                    src="${articles[0].image}"
                    alt="Coding books"
                    class="w-100 h-100 most__viewed__image"
                />
            </div>
        </div>
    </section>
        `;
    },

    initEventHandlers: (favoriteButton_onClick: Function) => {
        favoriteButton_onClick(articles, PARENT_ID);
    }

};