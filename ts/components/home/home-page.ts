import { gossip } from "./sections/gossip";
import { headlines } from "./sections/headlines";
import { lifestyle } from "./sections/lifestyle";
import { mostViewed } from "./sections/most-viewed";
import { nowSection } from "./sections/now";
import { opinion } from "./sections/opinion";
import { science } from "./sections/science";
import { exchangeClass, pageLoader } from "../../utils";
import {storageService } from "../../services";
import { LOCAL_STORAGE_FAVORITE } from "../../constants";

const HOME_PAGE_ID = "homePage";

export const homePage = {


    getContent: async (): Promise<string> => {

        pageLoader.start();
        
        const content = `
        <section class="home-page" id="${HOME_PAGE_ID}">
        ${await headlines.getContent()}
        ${await opinion.getContent()}
        ${await science.getContent()}
        ${await gossip.getContent()}
        ${await mostViewed.getContent()}
        ${await lifestyle.getContent()}
        ${nowSection.getContent()}
        </section>`

        pageLoader.stop();

        return content;
    },


    initEventHandlers: () => {
        headlines.initEventHandlers(favoriteButton_onClick);
        opinion.initEventHandlers(favoriteButton_onClick);
        science.initEventHandlers(favoriteButton_onClick);
        gossip.initEventHandlers(favoriteButton_onClick);
        lifestyle.initEventHandlers(favoriteButton_onClick);
        mostViewed.initEventHandlers(favoriteButton_onClick);
    },
}

const favoriteButton_onClick = (articles: Array<any>, parentElementId: string) => {


    const headlinesContentElem = document.getElementById(parentElementId);
    const favoriteButtons = headlinesContentElem.getElementsByClassName("favorite__button");

    favoriteButtons && [...favoriteButtons].forEach((elem) => {

         elem.addEventListener("click",(event: Event & { target: Element }) => {

            exchangeClass(event.target, "fa-regular", "fa-solid");

            const articleId = event.target.id.split("_")[1];
            const foundData = storageService.getData(LOCAL_STORAGE_FAVORITE).find((favArticle: any) => favArticle.id === articleId);
            
            //if article does not exists add it to local storage else remove
            if (!foundData) {
                const article = articles.find((art: any) => art.id === articleId);    
                storageService.setData(LOCAL_STORAGE_FAVORITE, [...storageService.getData(LOCAL_STORAGE_FAVORITE), article],);
            } else {
                storageService.setData(LOCAL_STORAGE_FAVORITE, [...storageService.getData(LOCAL_STORAGE_FAVORITE)].filter((favArticle: any) => favArticle.id !== articleId))
            }
        });
    });
}
