import { Component } from "../Abstract/Component";
import { DeliveryInfo } from "../Common/DeliveryInfo ";

export class DeliveryPage extends Component {
    stateUpdate: boolean = false;
    constructor(parent: HTMLElement) {
        super(parent, "div", ["delivery_page"]);

        new DeliveryInfo(this.node);
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
