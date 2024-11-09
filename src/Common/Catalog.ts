import { Component } from "../Abstract/Component";

export class Catalog extends Component {
    constructor(parent: HTMLElement) {
        super(parent, "section", ["catalog"]);

        new Component(this.node, "h2", ["catalog-title"], "Каталог");

        const categories = new Component(this.node, "div", ["catalog-categories"]);
        ["Все", "Новинка", "Хит"].forEach((category) => {
            new Component(categories.node, "button", ["category-button"], category);
        });

        const productList = new Component(this.node, "div", ["product-list"]);

        const products = [
            { name: "Пирожное “Муравейник”", price: "4,00р", image: "/assets/муравьишка.png" },
            { name: "Зефир в шоколаде", price: "2,00р", image: "/assets/marshmallow.png" },
            { name: "Пирожное “Гламур”", price: "2,00р", image: "/assets/glamour.png" },
        ];

        products.forEach((product) => {
            const productItem = new Component(productList.node, "div", ["product-item"]);
            new Component(
                productItem.node,
                "img",
                ["product-image"],
                product.image,
                ["src", "alt"],
                [product.image, product.image],
            );
            new Component(productItem.node, "div", ["product-name"], product.name);
            new Component(productItem.node, "div", ["product-price"], product.price);
            const addButton = new Component(productItem.node, "button", ["add-button"], "Добавить");
        });
    }
}
