import { html } from "lit";
import { fixture } from "../../../../test/helper";
import "./Element";

describe("Element", () => {
    it("yields markup with title and text", async () => {
        const result = await fixture(html`<my-element></my-element>`);

        expect(result).toMatchInlineSnapshot(`
            <my-element>
                #shadowRoot
                    <h1
                        part="title"
                    >
                        custom component
                    </h1>
                    <p>
                        some component text
                    </p>
                    <slot></slot>
            </my-element>
        `);
    });
});
