import { html } from "lit";
import { fixture } from "../../../../test/helper";
import "./DarkModeToggle";

describe("DarkModeToggle", () => {
    it("yields markup as expected", async () => {
        const result = await fixture(html` <dark-mode-toggle></dark-mode-toggle>`);

        expect(result).toMatchInlineSnapshot(`
            <dark-mode-toggle>
                #shadowRoot
                    <div
                        class="toggle-switch"
                    >
                        <label>
                            <input
                                type="checkbox"
                             />
                            <span
                                class="slider"
                            ></span>
                        </label>
                    </div>
            </dark-mode-toggle>
        `);
    });
});
