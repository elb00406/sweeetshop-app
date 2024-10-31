export class Component {
    node: HTMLElement;
    constructor(
        public parent: HTMLElement,
        tagName: keyof HTMLElementTagNameMap,
        arrStyles?: string[] | null,
        content?: string | null,
        attrProps?: string[] | null,
        attrValue?: string[] | null,
    ) {
        this.node = document.createElement(tagName);
        if (arrStyles) {
            arrStyles.forEach((nameStyles) => {
                this.node.classList.add(nameStyles);
            });
        }
        if (content) this.node.innerHTML = content;
        if (attrProps && attrValue && attrProps.length === attrValue.length) {
            attrProps.forEach((prop, i) => {
                this.node.setAttribute(prop, attrValue[i]);
            });
        }
        this.Render();
    }

    Remove() {
        this.node.remove();
    }

    Render() {
        this.parent.append(this.node);
    }
}
