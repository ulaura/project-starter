import { LOCAL_STORAGE_FAVORITE } from "../../constants";
import { storageService } from "../../services";

export const favoritePage = {

    getContent: (): string => {


        const favoriteArticles = storageService.getData(LOCAL_STORAGE_FAVORITE);
        
        const favArticlesHtml = favoriteArticles.map((favArt:any) => {
            return  `
          <section class="d-flex p-3 shadow-sm ">
          <header class="me-3 col-md-4">
              <img class="img-thumbnail" src="${favArt.image}" alt="">
          </header>
          <article>
              <h3 class="fw-bold">${favArt.title}</h3>
              <p>${favArt.description}</p>
              <small>
                  <span>${favArt.author}</span>
                  - 
                  <span>${favArt.published.split(" ")[0].replaceAll('-', '/')}</span>
              </small>
              <span class="align-self-end"><i id="favx_${favArt.id}" class="fav-article-remove fa-solid fa-xmark"></i></span>
          </article>
          </section>
          `
          });

        return `
        <section id="favoritePage">
            ${favArticlesHtml.join("")}
        </section>`
        

    },

    initEventHandlers: (parentComponent: any) => {
        const favArticleButtons = document.getElementsByClassName("fav-article-remove");

        [...favArticleButtons].forEach((elem: any) => {
            elem.addEventListener("click", (event: any) => {
                const favoriteArticleId = event.target.id.split("_")[1];
                storageService.setData(LOCAL_STORAGE_FAVORITE ,storageService.getData(LOCAL_STORAGE_FAVORITE).filter((favArt: any) => favArt.id !== favoriteArticleId ));
                parentComponent.displayContent("favorite");
            });
        });
    }

}