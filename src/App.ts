import { Component } from "./Abstract/Component";
import { Page } from "./Abstract/interfeces";
import { Footer } from "./Common/Footer";
import { Header } from "./Common/Header";
import { Router } from "./Common/Router";
import { CartPage } from "./Pages/CartPage";
import { CatalogPage } from "./Pages/CatalogPage";
import { DeliveryPage } from "./Pages/DeliveryPage";
import { MainPage } from "./Pages/MainPage";
import { PersonalAccountPage } from "./Pages/PersonalAccountPage";
import DBService from "./Services/dbService";
import LogicService from "./Services/logicService";

// const dbService = new DBService();
// const logicService = new LogicService(dbService);

export class App {
    constructor(parrent: HTMLElement) {
        const wrap = new Component(parrent, "div", ["wrapper"]);

        new Header(wrap.node);

        const main = new Component(wrap.node, "main");

        const links = {
            "#": new MainPage(main.node),
            "#account": new PersonalAccountPage(main.node),
            "#catalog": new CatalogPage(main.node),
            "#delivery": new DeliveryPage(main.node),
            "#cart": new CartPage(main.node),
        };

        new Router(links);

        new Footer(wrap.node);
    }
}
