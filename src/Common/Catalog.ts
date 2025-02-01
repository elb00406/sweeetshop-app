import { Component } from "../Abstract/Component";
import { TGood } from "../Abstract/Types";
import { ButtonTypeGood } from "./ButtonTypeGood";
import { GoodItem } from "./GoodItems";
import LogicService from "../Services/logicService";

export class Catalog extends Component {
    private divButtons: Component | null = null;
    private divGoods: Component | null = null;
    private carouselContainer: Component | null = null;
    private scrollAmount = 300;

    constructor(parent: HTMLElement, private service: LogicService) {
        super(parent, "div", ["catalog_section"]);

        new Component(this.node, "h2", ["catalog-title"], "Каталог");

        this.divButtons = new Component(this.node, "div", ["button_container"]);

        this.carouselContainer = new Component(this.node, "div", ["carousel-container"]);

        service.addListener("updateGoodsOnPage", (goods) => {
            if (goods) this.updateGoodsOnPage(goods as TGood[]);
        });

        this.update();
    }

    private update(): void {
        this.service.getTypesGoods().then((typesGoods) => {
            typesGoods.forEach((typeGood) => {
                if (this.divButtons) {
                    new ButtonTypeGood(this.divButtons.node, this.service, typeGood);
                }
            });

            this.service.updateAllGoods();
        });
    }

    updateGoodsOnPage(goods: TGood[]): void {
        const divGoods = this.divGoods;
        const carouselContainer = this.carouselContainer;
        if (divGoods) {
            divGoods.node.innerHTML = "";

            if (!goods || goods.length === 0) {
                new Component(divGoods.node, "p", ["no-goods-message"], "Нет товаров");
                return;
            }

            if (goods.length >= 4 && carouselContainer) {
                const leftArrow = new Component(
                    carouselContainer.node,
                    "button",
                    ["carousel-arrow", "left-arrow"],
                    "◀",
                );
                leftArrow.node.addEventListener("click", () => this.scrollLeft());

                const rightArrow = new Component(
                    carouselContainer.node,
                    "button",
                    ["carousel-arrow", "right-arrow"],
                    "▶",
                );
                rightArrow.node.addEventListener("click", () => this.scrollRight());
                this.divGoods = new Component(carouselContainer.node, "div", ["goods_container"]);
            }

            goods.forEach((good) => {
                new GoodItem(divGoods.node, this.service, good);
            });
        }
    }

    private scrollLeft(): void {
        if (this.divGoods) {
            this.divGoods.node.scrollBy({
                left: -this.scrollAmount,
                behavior: "smooth",
            });
        }
    }

    private scrollRight(): void {
        if (this.divGoods) {
            this.divGoods.node.scrollBy({
                left: this.scrollAmount,
                behavior: "smooth",
            });
        }
    }
}
