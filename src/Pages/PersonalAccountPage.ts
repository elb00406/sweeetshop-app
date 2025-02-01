import { Component } from "../Abstract/Component";
import { Login } from "../Common/Login";

export class PersonalAccountPage extends Component {
    stateUpdate: boolean = false;
    constructor(parent: HTMLElement) {
        super(parent, "div", ["account_page"]);

        // new Component(this.node, "p", null, "Личный кабинет");

        new Login(this.node);
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
