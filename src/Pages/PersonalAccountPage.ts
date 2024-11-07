import { Component } from "../Abstract/Component";

export class PersonalAccountPage extends Component {
    stateUpdate: boolean = false;
    constructor(parent: HTMLElement) {
        super(parent, "div", ["account_page"]);

        new Component(this.node, "p", null, "Личный кабинет");
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
