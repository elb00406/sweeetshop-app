import { Component } from "../Abstract/Component";

export class DeliveryPage extends Component {
    stateUpdate: boolean = false;
    constructor(parent: HTMLElement) {
        super(parent, "div", ["delivery_page"]);

        new Component(this.node, "p", null, "DeliveryPage");
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
