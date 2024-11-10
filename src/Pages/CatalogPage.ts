import { Component } from "../Abstract/Component";
import { TGood } from "../Abstract/Types";
import { ButtonTypeGood } from "../Common/ButtonTypeGood";
import { GoodItem } from "../Common/GoodItems";
import LogicService from "../Services/logicService";

export class CatalogPage extends Component {
    stateUpdate: boolean = false;

    private data: Component | null = null;
    private divButtons: Component | null = null;
    private divGoods: Component | null = null;
    constructor(parent: HTMLElement, private service: LogicService) {
        super(parent, "div", ["catalog_page"]);

        new Component(this.node, "p", null, "Страница Каталога");

        this.data = new Component(this.node, "div", ["data_container"]);
        this.divButtons = new Component(this.data.node, "div", ["button_container"]);
        this.divGoods = new Component(this.data.node, "div", ["goods_container"]);

        service.addListener("updateGoodsOnPage", (goods) => {
            if (goods) this.updateGoodsOnPage(goods as TGood[]);
        });
    }

    renderWithUpdate(): void {
        if (!this.stateUpdate) {
            this.update();
            this.stateUpdate = true;
        }
        this.Render();
    }

    update(): void {
        this.service.getTypesGoods().then((typesGoods) => {
            typesGoods.forEach((typeGood) => {
                if (this.divButtons) {
                    new ButtonTypeGood(this.divButtons.node, this.service, typeGood);
                }
            });
            this.service.updateAllGoods();
        });
    }

    updateGoodsOnPage(goods: any[]): void {
        const divGoods = this.divGoods;
        if (divGoods) {
            divGoods.node.innerHTML = "";

            if (!goods || goods.length === 0) {
                const noGoodsMessage = new Component(
                    divGoods.node,
                    "p",
                    ["no-goods-message"],
                    "Нет товаров",
                );
                return;
            }

            goods.forEach((good) => {
                new GoodItem(divGoods.node, this.service, good);
            });
        }
    }
}
