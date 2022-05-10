import { html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

const articleList = [
    {
        title: "Article Title 5 - Sweet roll caramels",
        dateTime: "2011-11-18T14:54:39.929",
        authorName: "Albert Ramirez",
        content:
            "Sweet roll caramels toffee dessert powder gummies. Ice cream caramels cupcake biscuit dragée candy gummi bears." +
            "Tart topping chupa chups soufflé toffee sugar plum lemon drops wafer lemon drops." +
            "Cake shortbread sugar plum sweet roll wafer gummies cake. Liquorice halvah chocolate croissant tootsie roll ice cream chupa chups cake.",
        footer: "#cupcake #biscuit",
        themeClass: "article--blue",
    },
    {
        title: "Article Title 5 - candy canes cake pie ",
        dateTime: "2011-11-18T14:54:39.929",
        authorName: "Wu Chin Ho",
        content:
            "Icing soufflé candy canes cake pie gummi bears jelly. Liquorice ice cream gummi bears candy lemon drops macaroon tootsie roll pie pie." +
            "Lollipop pie cheesecake sweet halvah dessert bonbon sweet roll. Sweet roll danish powder apple pie candy candy gingerbread chocolate.",
        footer: "#macaroon #cake #soufflé #jelly",
        themeClass: "article--white",
    },
    {
        title: "Article Title 6 - marshmallow topping ice cream",
        dateTime: "2011-11-18T14:54:39.929",
        authorName: "John Mc Johnson",
        content:
            "Jujubes pastry marshmallow topping ice cream jelly-o dragée liquorice." +
            "Lollipop macaroon chocolate lollipop tiramisu icing lollipop sesame snaps." +
            "Tootsie roll brownie muffin pie icing sweet caramels tiramisu.",
        footer: "#marshmallow #lollipop",
        themeClass: "article--blue-light",
    },
    {
        title: "Article Title 7 - toffee gummi bears",
        dateTime: "2011-11-18T14:54:39.929",
        authorName: "Herman Duffle",
        content:
            "Cheesecake sesame snaps toffee gummi bears cheesecake oat cake soufflé wafer icing. Pie ice cream soufflé pudding oat cake apple pie." +
            "Gummi bears jelly beans bear claw chupa chups dragée cotton candy halvah powder." +
            "Chocolate bar gingerbread carrot cake jujubes fruitcake apple pie bear claw fruitcake chocolate." +
            "Biscuit tootsie roll apple pie marzipan muffin gingerbread bear claw. Icing marzipan jelly gummi bears dessert." +
            "Carrot cake chocolate bear claw powder macaroon cheesecake tart.",
        footer: "#brownie #cheesecake",
        themeClass: "article--blue-light",
    },
    {
        title: "Article Title 8 - chocolate cake marshmallow oat",
        dateTime: "2011-11-18T14:54:39.929",
        authorName: "Marie Jan Doe",
        content:
            "Gingerbread sugar plum chocolate cake marshmallow oat cake tootsie roll cheesecake chocolate bar liquorice.",
        footer: "#sugar",
        themeClass: "article--white",
    },
];

@customElement("my-article-list")
export class ArticleList extends LitElement {
    constructor() {
        super();
    }

    protected createRenderRoot() {
        // disable shadow root
        return this;
    }
    public render(): TemplateResult {
        return html`
            <section>
                ${articleList.map(
                    (article, index) => html`
                        <my-article
                            id=${`article${index}`}
                            .title=${article.title}
                            .dateTime=${article.dateTime}
                            .authorName=${article.authorName}
                            .content=${article.content}
                            .footer=${article.footer}
                            .themeClass=${article.themeClass}
                        ></my-article>
                    `
                )}
            </section>
            <slot></slot>
        `;
    }
}
