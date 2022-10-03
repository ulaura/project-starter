export const pageFooter = {
    getContent: () => {
        return `
        <div class="px-3">
        <footer class="mt-5 shadow p-4 bg-light">
            <section class="d-flex justify-content-between media__header__wrap">
                <div class="d-flex flex-column width__one__third">
                    <img
                        class="logo mb-4"
                        src="https://static.skyassets.com/contentstack/assets/bltdc2476c7b6b194dd/blt60b2d631fdc493bf/605083db32845c7ca164859d/NOW_Logo_Solid_Gradient_131x42mm_RGB-1.png"
                        alt="now"
                    />
                    <a href="./post.html" class="display__text__blue">Subscribe</a>
                    <a href="./post.html" class="display__text__blue">Contribute</a>
                </div>

                <section class="width__one__third">
                    <ul class="list__no__style">
                        <li><a href="./post.html" class="no__style__link">Contact us</a></li>
                        <li>
                            <a href="./post.html" class="no__style__link"
                                >Complaints & corrections</a
                            >
                        </li>
                        <li><a href="./post.html" class="no__style__link">SecureDrop</a></li>
                        <li class="mb-4">
                            <a href="./post.html" class="no__style__link">Work for us</a>
                        </li>
                        <li><a href="./post.html" class="no__style__link">Pivacy settings</a></li>
                        <li><a href="./post.html" class="no__style__link">Privacy policy</a></li>
                        <li><a href="./post.html" class="no__style__link">Cookie policy</a></li>
                        <li>
                            <a href="./post.html" class="no__style__link">Terms & conditions</a>
                        </li>
                        <li><a href="./post.html" class="no__style__link">Help</a></li>
                        <li>
                            <a href="./post.html" class="no__style__link">Advertise with us</a>
                        </li>
                    </ul>
                </section>

                <section class="width__one__third">
                    <ul class="list__no__style">
                        <li><a href="./post.html" class="no__style__link">All topics</a></li>
                        <li><a href="./post.html" class="no__style__link">All writers</a></li>
                        <li class="mb-4">
                            <a href="./post.html" class="no__style__link"
                                >Digital newspaper archive</a
                            >
                        </li>
                        <li><a href="./post.html" class="no__style__link">Facebook</a></li>
                        <li><a href="./post.html" class="no__style__link">Youtube</a></li>
                        <li><a href="./post.html" class="no__style__link">Instagram</a></li>
                        <li><a href="./post.html" class="no__style__link">Linkedin</a></li>
                        <li><a href="./post.html" class="no__style__link">Twitter</a></li>
                        <li class="mb-4">
                            <a href="./post.html" class="no__style__link">Newsletters</a>
                        </li>
                        <li><a href="./post.html" class="no__style__link">Search UK jobs</a></li>
                    </ul>
                </section>
            </section>
            <small>© 2022 Company, Inc. All rights reserved</small>
        </footer>
    </div>
        `;
    },

    initEventHandlers: () => {console.log("No event handlers to initialize for page-footer component");}
};