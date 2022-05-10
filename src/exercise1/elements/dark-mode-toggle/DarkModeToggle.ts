import { css, html, LitElement, TemplateResult, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";

import styleText from "./dark-mode-toggle.css";

@customElement("dark-mode-toggle")
export class DarkModeToggle extends LitElement {
    static styles = css`
        ${unsafeCSS(styleText)}
    `;

    toggleClassOnBody() {
        document.getElementById("body")?.classList.toggle("theme--dark");
    }

    public render(): TemplateResult {
        return html`
            <div class="toggle-switch">
                <label>
                    <input type="checkbox" @click="${this.toggleClassOnBody}" />
                    <span class="slider"></span>
                </label>
            </div>
        `;
    }
}
