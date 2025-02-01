import { Component } from "../Abstract/Component";
import { TGood } from "../Abstract/Types";
import LogicService from "../Services/logicService";

export class GoodItem extends Component {
    constructor(parent: HTMLElement, service: LogicService, good: TGood) {
        super(parent, "div", ["good_item"]);

        const img = new Component(
            this.node,
            "img",
            ["good_image"],
            null,
            ["src", "alt"],
            ["/assets/basket.svg", "good.title"],
        );

        new Component(this.node, "p", ["good_name"], good.title);

        new Component(this.node, "p", ["good_quantity"], `Количество - ${good.count} шт`);
        new Component(this.node, "p", ["good_name"], good.title);

        const addButton = new Component(this.node, "button", ["add_button"], "Добавить");
    }
}
