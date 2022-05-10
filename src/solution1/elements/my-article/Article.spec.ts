import { html } from "lit";
import { fixture } from "../../../../test/helper";
import "./Article";

describe("Article", () => {
    it("yields markup with articles", async () => {
        const result = await fixture(html`<my-article></my-article>`);

        expect(result).toMatchInlineSnapshot(`
            <my-article>
                #shadowRoot
                    <article
                        class=" article  "
                    >
                        <header
                            class="article__header"
                        >
                            <h2
                                class="article__title"
                            ></h2>
                            <small
                                class="article__date"
                            >
                                created: 
                                <time
                                    datetime=""
                                ></time>
                                 by
                                    
                                <span></span>
                            </small>
                        </header>
                        <main
                            class="article__content"
                            part="main"
                        >
                            <p></p>
                        </main>
                        <footer
                            class="article__footer"
                        >
                            <p></p>
                        </footer>
                    </article>
            </my-article>
        `);
    });
});
