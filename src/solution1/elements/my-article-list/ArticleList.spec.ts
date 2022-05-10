import { html } from "lit";
import { fixture } from "../../../../test/helper";
import "./ArticleList";

describe("ArticleList", () => {
    it("yields markup with my-articles", async () => {
        const result = await fixture(html`<my-article-list></my-article-list>`);

        expect(result).toMatchInlineSnapshot(`
            <my-article-list>
                <section>
                    <my-article
                        id="article0"
                        title="Article Title 5 - Sweet roll caramels"
                    ></my-article>
                    <my-article
                        id="article1"
                        title="Article Title 5 - candy canes cake pie "
                    ></my-article>
                    <my-article
                        id="article2"
                        title="Article Title 6 - marshmallow topping ice cream"
                    ></my-article>
                    <my-article
                        id="article3"
                        style="--my-article__padding-top: 0;"
                        title="Article Title 7 - toffee gummi bears"
                    ></my-article>
                    <my-article
                        id="article4"
                        title="Article Title 8 - chocolate cake marshmallow oat"
                    ></my-article>
                </section>
                <slot></slot>
            </my-article-list>
        `);
    });
});
