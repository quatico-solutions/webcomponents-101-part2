import { html, LitElement, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import styleText from "./my-article.css";

@customElement("my-article")
export class Article extends LitElement {
    static styles = css`
        ${unsafeCSS(styleText)}
    `;

    @property({ type: String }) public title = "";
    @property({ type: String }) public dateTime = "";
    @property({ type: String }) public authorName = "";
    @property({ type: String }) public content = "";
    @property({ type: String }) public footer = "";
    @property({ type: String }) public themeClass = "";

    render() {
        return html`
            <article class="${classMap({ article: true, [this.themeClass]: true })}">
                <header class="article__header">
                    <h2 class="article__title">${this.title}</h2>
                    <small class="article__date"
                        >created: <time datetime="${this.dateTime}">${this.dateTime.substr(0, 10)}</time> by
                        <span>${this.authorName}</span></small
                    >
                </header>
                <main part="main" class="article__content">
                    <p>${this.content}</p>
                </main>
                <footer class="article__footer">
                    <p>${this.footer}</p>
                </footer>
            </article>
        `;
    }
}
