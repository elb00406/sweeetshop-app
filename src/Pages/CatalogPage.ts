import { Component } from "../Abstract/Component";

export class CatalogPage extends Component {
    stateUpdate: boolean = false;
    constructor(parent: HTMLElement) {
        super(parent, "div", ["catalog_page"]);

        new Component(this.node, "p", null, "Страница Каталога");
    }

    renderWithUpdate(): void {
        if (!this.stateUpdate) {
            this.update();
            this.stateUpdate = true;
        }
        this.Render();
    }

    update(): void {}
}
