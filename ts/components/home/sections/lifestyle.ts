import { dataService } from "../../../services";
import { ARTICLE_PER_COMPONENT_LIFESTYLE, LIFESTYLE_SECTION_CONTENT } from "../../../constants";
import { articleHeader } from "./common/section-header";

const SECTION_TITLE = "Lifestyle"
const PARENT_ID = "lifestyleNewsContent";
let articles: Array<any> = [];

export const lifestyle = {
    getContent: async () => {

        articles = await dataService.getData({endpoint: "search", queryParams: new Map([["keywords", LIFESTYLE_SECTION_CONTENT], ["limit", `${ARTICLE_PER_COMPONENT_LIFESTYLE}`]])});

        return `
        <section class="mt-5" id="${PARENT_ID}">
        ${articleHeader.getContent(SECTION_TITLE)}
        <article class="mb-3 px-3 mt-4 lifestyle__article__display position-relative" >
            <header>
                <img
                    class="w-100 lifestyle__image"
                    src="${articles[0].image}"
                    alt="A shelf of books"
                />
            </header>
            <div class="mt-2">
                <a href="./post.html" class="no__style__link fw-bold lifestyle__article__title">${articles[0].title}</a>
                <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[0].id}"></i></span>
                <small class="d-block text-muted mt-2 lifestyle__article__pub__date">${articles[0].published.split(" ")[0].replaceAll('-', '/')}</small>
            </div>
        </article>
        <hr class="m-0 mx-3 hr__visibility" />
        <section class="d-flex direction__column">
            <article class="width__one__third pt-3 px-3 full__width position-relative">
                <header>
                    <img
                        src="${articles[1].image}"
                        alt="CSS books"
                        class="w-100 lifestyle__image"
                    />
                </header>
                <div class="mt-3">
                    <a href="./post.html" class="no__style__link fw-bold lifestyle__article__title">${articles[1].title}</a>
                    <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[1].id}"></i></span>
                    <small class="d-block text-muted mt-2 lifestyle__article__pub__date">${articles[1].published.split(" ")[0].replaceAll('-', '/')}</small>
                </div>
            </article>
            <article
                class="width__one__third border-start border-end border-2 pt-3 px-3 bx__none full__width position-relative"
            >
                <header>
                    <img
                        src="${articles[2].image}"
                        alt="A programming book"
                        class="w-100 lifestyle__image"
                    />
                </header>
                <div class="mt-3">
                    <a href="./post.html" class="no__style__link fw-bold lifestyle__article__title">${articles[2].title}</a>
                    <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[2].id}"></i></span>
                    <small class="d-block text-muted mt-2 lifestyle__article__pub__date">${articles[2].published.split(" ")[0].replaceAll('-', '/')}</small>
                </div>
            </article>
            <article
                class="width__one__third pt-3 px-3 full__width position-relative"
            >
                <header>
                    <img
                        src="${articles[3].image}"
                        alt="books"
                        class="w-100 lifestyle__image"
                    />
                </header>
                <div class="mt-3">
                    <a href="./post.html" class="no__style__link fw-bold lifestyle__article__title">${articles[3].title}</a>
                    <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[3].id}"></i></span>
                    <small class="d-block text-muted mt-2 lifestyle__article__pub__date">${articles[3].published.split(" ")[0].replaceAll('-', '/')}</small>
                </div>
            </article>
        </section>
    </section>
        `;
    },


    initEventHandlers: (favoriteButton_onClick: Function) => {
        favoriteButton_onClick(articles, PARENT_ID);
    }

};