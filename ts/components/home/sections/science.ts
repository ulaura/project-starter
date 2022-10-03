import { ARTICLE_PER_COMPONENT_SCIENCE, SCIENCE_SECTION_CONTENT } from "../../../constants";
import { dataService } from "../../../services";
import { articleHeader } from "./common/section-header";

const SECTION_TITLE = "Science"
const PARENT_ID = "scienceNewsContent";
let articles: Array<any> = [];


export const science = {
    getContent: async () => {

        articles = await dataService.getData({endpoint: "search", queryParams: new Map([["keywords", SCIENCE_SECTION_CONTENT], ["limit", `${ARTICLE_PER_COMPONENT_SCIENCE}`]])});

        return `
			<section class="mt-5 px-3">
            ${articleHeader.getContent(SECTION_TITLE)}
            <section class="d-flex direction__column" id="${PARENT_ID}">
                <article class="pt-4 w-50 pe-3 px__none full__width position-relative">
                    <header>
                        <img
                            src="${articles[0].image}"
                            alt="Quantum Digits"
                            class="w-100 science__image"
                        />
                    </header>
                    <div class="mt-2">
                        <a href="./post.html" class="no__style__link fw-bold science__article__title">${articles[0].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[0].id}"></i></span>
                        <small class="d-block text-muted mt-2 science__article__pub__date">${articles[0].published.split(" ")[0].replaceAll('-', '/')}</small>
                    </div>
                </article>
                <section class="w-50 border-start border-2 ps-3 pt-3 px__none full__width bx__none">
                    <article class="position-relative">
                        <a href="./post.html" class="no__style__link fw-bold science__article__title">${articles[1].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[1].id}"></i></span>
                        <small class="d-block text-muted mt-2 science__article__pub__date">${articles[1].published.split(" ")[0].replaceAll('-', '/')}</small>
                    </article>
                    <article class="mt-2 position-relative">
                        <a href="./post.html" class="no__style__link fw-bold science__article__title">${articles[2].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[2].id}"></i></span>
                        <small class="d-block text-muted mt-2 science__article__pub__date">${articles[2].published.split(" ")[0].replaceAll('-', '/')}</small>
                    </article>
                    <article class="mt-2 position-relative">
                        <a href="./post.html" class="no__style__link fw-bold science__article__title">${articles[3].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[3].id}"></i></span>
                        <small class="d-block text-muted mt-2 science__article__pub__date">${articles[3].published.split(" ")[0].replaceAll('-', '/')}</small>
                    </article>
                    <article class="mt-2 position-relative">
                        <a href="./post.html" class="no__style__link fw-bold science__article__title">${articles[4].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[4].id}"></i></span>
                        <small class="d-block text-muted mt-2 science__article__pub__date">${articles[4].published.split(" ")[0].replaceAll('-', '/')}</small>
                    </article>
                    <article class="mt-2 position-relative">
                        <a href="./post.html" class="no__style__link fw-bold science__article__title">${articles[5].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[5].id}"></i></span>
                        <small class="d-block text-muted mt-2 science__article__pub__date">${articles[5].published.split(" ")[0].replaceAll('-', '/')}</small>
                    </article>
                    <article class="mt-2 position-relative">
                        <a href="./post.html" class="no__style__link fw-bold science__article__title">${articles[6].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[6].id}"></i></span>
                        <small class="d-block text-muted mt-2 science__article__pub__date">${articles[6].published.split(" ")[0].replaceAll('-', '/')}</small>
                    </article>
                </section>
            </section>
        </section>
        `;
    },

    initEventHandlers: (favoriteButton_onClick: Function) => {
        favoriteButton_onClick(articles, PARENT_ID);
    }
};