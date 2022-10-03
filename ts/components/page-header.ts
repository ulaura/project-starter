
const FAVORITE_PAGE_ID  = "favoritesPageNav";
const HOME_PAGE_ID = "homePageNav";

export const pageHeader = {

  getContent: (): string => {
    return `
        <header class="d-flex justify-content-around py-3 align-items-center page__header">
            <img class="logo mx__logo" src="https://static.skyassets.com/contentstack/assets/bltdc2476c7b6b194dd/blt60b2d631fdc493bf/605083db32845c7ca164859d/NOW_Logo_Solid_Gradient_131x42mm_RGB-1.png" alt="now" />
            <nav id="navigationBar" class="nav__bar">
                <ul class="link__cnt__display link__cnt list__no__style d-flex justify-content-between mb-0">
                    <li><a href="./post.html" class="no__style__link" id="${HOME_PAGE_ID}">News</a></li>
                    <li><a href="./post.html" class="no__style__link">Opinion</a></li>
                    <li><a href="./post.html" class="no__style__link">Sport</a></li>
                    <li><a href="./post.html" class="no__style__link">Culture</a></li>
                    <li><a href="#" class="no__style__link">Lifestyle</a></li>
                    <li><a href="#" class="no__style__link" id="${FAVORITE_PAGE_ID}">Favorites</a></li>
                </ul>
            </nav>
            <div class="d-flex align-items-center">
                <select class="form-select me-3">
                    <option>EN</option>
                    <option>ES</option>
                    <option>DE</option>
                </select>
                <a href="./post.html" class="no__style__link">Account</a>
            </div>
            <div class="toggle_wrapper">
                <div id="burgerButton" class="toggle"></div>
            </div>
        </header>`;
  },

  initEventHandlers: (favoritesPage_onClick?: Function, newsPage_onClick?: Function) => {
    addFavoritePageHandler(favoritesPage_onClick);
    addBurgerButtonHandler();
    addNewPageHandler(newsPage_onClick);
  },
};


const addNewPageHandler = (newsPage_onClick?: Function) => {
  const homePageElem = document.getElementById(HOME_PAGE_ID);

  homePageElem.addEventListener("click", (event) => {
    event.preventDefault();
    newsPage_onClick();
  });
}

const addFavoritePageHandler = (favoritesPage_onClick?: Function) => {
  const favoritesPageElem = document.getElementById(FAVORITE_PAGE_ID);

  favoritesPageElem.addEventListener("click", (event) => {
    event.preventDefault();
    favoritesPage_onClick();
  });

}


const addBurgerButtonHandler = () => {
  const navigationBarElem = document.getElementById("navigationBar");
  const burgerButton = document.getElementById("burgerButton");

  burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("active");
    navigationBarElem.classList.toggle("nav__display");
  });
}