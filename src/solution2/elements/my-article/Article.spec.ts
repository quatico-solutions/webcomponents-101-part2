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
                        </header>
                        <main
                            class="article__content"
                        >
                            <p></p>
                            <slot></slot>
                        </main>
                    </article>
            </my-article>
        `);
    });
});
