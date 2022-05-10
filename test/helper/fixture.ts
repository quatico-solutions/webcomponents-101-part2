import { render, TemplateResult } from "lit";

export const fixture = async <T extends HTMLElement>(element: TemplateResult): Promise<HTMLElement> => {
    const container = document.createElement("div");
    render(element, container);
    document.body.appendChild(container);
    return (await container.firstElementChild) as T;
};
