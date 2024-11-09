import { Component } from "../Abstract/Component";
import { TGood } from "../Abstract/Types";
import LogicService from "../Services/logicService";
// import { TGood } from "../Types/TGood";

export class GoodItem extends Component {
    constructor(parent: HTMLElement, service: LogicService, good: TGood) {
        super(parent, "div", ["good_item"]);

        new Component(this.node, "p", ["good_quantity"], `Количество - ${good.count} шт`);
        new Component(this.node, "p", ["good_name"], good.title);
    }
}
