import { Component } from "../Abstract/Component";

export class CartPage extends Component {
    stateUpdate: boolean = false;
    constructor(parent: HTMLElement) {
        super(parent, "div", ["cart_page"]);

        new Component(this.node, "p", null, "Корзина");
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
