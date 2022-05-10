import { css, html, LitElement, TemplateResult, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import styleText from "./my-article.css";

@customElement("my-article")
export class Article extends LitElement {
    static styles = css`
        ${unsafeCSS(styleText)}
    `;

    @property({ type: String }) public title = "";
    @property({ type: String }) public content = "";
    @property({ type: String }) public footer = "";
    @property({ type: String }) public themeClass = "";

    // will deactivate shadow dom
    createRenderRoot() {
        return this;
    }

    public render(): TemplateResult {
        return html`
            <!-- default slot would be here -->

            <article class="${classMap({ article: true, [this.themeClass]: true })}">
                <header class="article__header">
                    <h2 class="article__title">${this.title}</h2>
                </header>
                <main class="article__content">
                    <p>${this.content}</p>
                    <slot></slot>
                </main>
                <footer class="article__content" part="footer">
                    <p>${this.footer}</p>
                </footer>
                <slot></slot>
            </article>
        `;
    }
}
