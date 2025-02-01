// src/Pages/MainPage.ts
import { Component } from "../Abstract/Component";
import { Catalog } from "../Common/Catalog";
import { DeliveryInfo } from "../Common/DeliveryInfo ";
import { Intro } from "../Common/Intro";
import { Login } from "../Common/Login";
import LogicService from "../Services/logicService";

export class MainPage extends Component {
    stateUpdate: boolean = false;
    private service: LogicService;

    constructor(parent: HTMLElement, service: LogicService) {
        super(parent, "div", ["main_page"]);
        this.service = service;

        new Intro(this.node);
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
