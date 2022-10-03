import { ARTICLE_PER_COMPONENT_HEADLINES, HEADLINES_SECTION_CONTENT } from "../../../constants";
import { dataService } from "../../../services";
import { articleHeader as  sectionHeader } from "./common/section-header";


const SECTION_TITLE = "Headlines"
const PARENT_ID = "headlinesNewsContent";
let articles: Array<any> = [];

export const headlines = {
  getContent: async (): Promise<string> => {
    
    articles = await dataService.getData({endpoint: "search",queryParams: new Map([["keywords", HEADLINES_SECTION_CONTENT],["limit", `${ARTICLE_PER_COMPONENT_HEADLINES}`],]),});

    return `	
        <section class="mt-5 px-3">
            ${sectionHeader.getContent(SECTION_TITLE)}
            <div class="d-flex w-100 direction__column" id="${PARENT_ID}">
                <div class="w-50 pt-4 pe-3 position-relative full__width px__none">
                    <img class="w-100 headlines__image" src="${
                      articles[0].image
                    }" alt="laptop"/>
                    <div class="set__position">
                        <a href="./post.html" class="no__style__link text-light fw-bold fs-5 fs__smaller headlines__article__title">${
                          articles[0].title
                        }</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${
                          articles[0].id
                        }"></i></span>
                        <small class="text-muted d-block mt-1 headlines__article__pub__date">${articles[0].published
                          .split(" ")[0]
                          .replaceAll("-", "/")}</small>
                    </div>
                </div>
                <div class="d-flex flex-column w-50 border-start border-2 pt-4 ps-3 full__width px__none bx__none">
                    <div class="position-relative">
                        <a href="./post.html" class="no__style__link fw-bold headlines__article__title" >${
                          articles[1].title
                        }</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${
                          articles[1].id
                        }"></i></span>
                        <small class="text-muted d-block mt-1 headlines__article__pub__date">${articles[1].published
                          .split(" ")[0]
                          .replaceAll("-", "/")}</small>
                    </div>
                    <div class="mt-4 position-relative">
                        <a href="./post.html" class="no__style__link fw-bold headlines__article__title">${
                          articles[2].title
                        }</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${
                          articles[2].id
                        }"></i></span>
                        <small class="text-muted d-block mt-1 headlines__article__pub__date">${articles[2].published
                          .split(" ")[0]
                          .replaceAll("-", "/")}</small>
                    </div>
                    <div class="mt-4 position-relative">
                        <a href="./post.html" class="no__style__link fw-bold headlines__article__title">${
                          articles[3].title
                        }</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${
                          articles[3].id
                        }"></i></span>
                        <small class="text-muted d-block mt-1 headlines__article__pub__date">${articles[3].published
                          .split(" ")[0]
                          .replaceAll("-", "/")}</small>
                    </div>
                </div>
            </div>
        </section>`;
  },

  initEventHandlers: (favoriteButton_onClick: Function) => {
    favoriteButton_onClick(articles, PARENT_ID);
  },
};