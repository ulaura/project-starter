import { dataService } from "../../../services";
import { ARTICLE_PER_COMPONENT_GOSSIP, GOSSIP_SECTION_CONTENT } from "../../../constants";
import { articleHeader } from "./common/section-header";

const SECTION_TITLE = "Gossip"
const PARENT_ID = "gossipNewsContent";
let articles: Array<any> = [];

export const gossip = {
    
    getContent: async () => {
        articles = await dataService.getData({endpoint: "search", queryParams: new Map([["keywords", GOSSIP_SECTION_CONTENT], ["limit", `${ARTICLE_PER_COMPONENT_GOSSIP}`]])});
        return `
			<section class="mt-5 px-3">
            ${articleHeader.getContent(SECTION_TITLE)}
            <section class="d-flex gossip__split direction__column" id="${PARENT_ID}">
                <article class="w-75 mt-4 pe-3 px__none full__width position-relative">
                    <header>
                        <img
                            src="${articles[0].image}"
                            alt="nano-robot"
                            class="w-100 gossip__image"
                        />
                    </header>
                    <div class="mt-2">
                        <a href="./post.html" class="no__style__link fw-bold gossip__article__title">${articles[0].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[0].id}"></i></span>
                        <small class="d-block text-muted mt-2 gossip__article__pub__date">${articles[0].published.split(" ")[0].replaceAll('-', '/')}</small>
                    </div>
                </article>
                <section class="w-25 border-start border-2 pt-4 ps-3 full__width px__none bx__none">
                    <article class="position-relative">
                        <header>
                            <img src="${articles[1].image}" alt="Love to learn" class="w-100 gossip__image"/>
                        </header>
                        <div class="mt-2">
                            <a href="./post.html" class="no__style__link fw-bold gossip__article__title">${articles[1].title}</a>
                            <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[1].id}"></i></span>
                            <small class="d-block text-muted mt-2 gossip__article__pub__date">${articles[1].published.split(" ")[0].replaceAll('-', '/')}</small>
                        </div>
                    </article>
                    <article class="mt-3 position-relative">
                        <header>
                            <img
                                src="${articles[2].image}"
                                alt="CSS features"
                                class="w-100 gossip__image"
                            />
                        </header>
                        <div class="mt-2">
                            <a href="./post.html" class="no__style__link fw-bold gossip__article__title">${articles[2].title}</a>
                            <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[2].id}"></i></span>
                            <small class="d-block text-muted mt-2 gossip__article__pub__date">${articles[2].published.split(" ")[0].replaceAll('-', '/')}</small>
                        </div>
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