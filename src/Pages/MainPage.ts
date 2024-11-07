import { Component } from "../Abstract/Component";
import { Catalog } from "../Common/Catalog";
import { Intro } from "../Common/Intro";

export class MainPage extends Component {
    stateUpdate: boolean = false;
    constructor(parent: HTMLElement) {
        super(parent, "div", ["main_page"]);

        new Intro(this.node);
        new Catalog(this.node);
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
