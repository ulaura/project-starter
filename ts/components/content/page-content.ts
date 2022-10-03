import { homePage } from "../home/home-page"
import { favoritePage } from "../favorite/favorite-page";

const PAGE_CONTENT_ID = "pageContent";

export const pageContent = {

    getContent: async () => {
        return `
        <section class="page__content" id="${PAGE_CONTENT_ID}">
        ${ await homePage.getContent()}
        </section>`
    },

    initEventHandlers: () => {
        homePage.initEventHandlers();
    },

    displayContent: async (content: string) => {
        const pageContentElem = document.getElementById(PAGE_CONTENT_ID);
        pageContentElem.innerHTML = '';

        switch (content) {
          case "favorite":
            pageContentElem.innerHTML += favoritePage.getContent();
            favoritePage.initEventHandlers(pageContent);
            break;
          case "home":
            pageContentElem.innerHTML += await homePage.getContent();
            homePage.initEventHandlers();
            break;
        }

    }
}
