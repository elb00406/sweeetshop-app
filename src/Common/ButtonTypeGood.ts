import { Component } from "../Abstract/Component";
import LogicService from "../Services/logicService";

export class ButtonTypeGood extends Component {
    constructor(parent: HTMLElement, private service: LogicService, typeGood: any) {
        super(parent, "button", ["type_good_button"], typeGood.title);

        this.node.onclick = () => {
            console.log("Button clicked for type:", typeGood);
            const buttons = document.querySelectorAll(".type_good_button");
            buttons.forEach((button) => button.classList.remove("active"));

            this.node.classList.add("active");

            service.updateGoodsByType(Number(typeGood.id));
        };
    }
}
