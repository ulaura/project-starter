
export const articleHeader = {
    
    getContent: (title: string): string => {
        return`
        <header
            class="d-flex justify-content-between align-items-end headlines__header media__header__wrap">
            <h2 class="m-0 fs-3 display__text__blue">${title}</h2>
            <hr class="w-75 m-0 media__no__width" />
            <a href="./post.html" class="text-dark">View all</a>
        </header>`;
        }
}
