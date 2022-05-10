import { html, css, LitElement, unsafeCSS, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import styleText from "./my-element.css";

/**
 * An example element.
 *
 * @slot - This element has a slot for external content
 * @csspart title - external styleable component
 */
@customElement("my-element")
export class Element extends LitElement {
    static styles = css`
        ${unsafeCSS(styleText)}
    `;

    constructor() {
        super();
    }

    public render(): TemplateResult {
        return html`
            <h1 part="title">custom component</h1>
            <p>some component text</p>
            <slot></slot>
        `;
    }
}
