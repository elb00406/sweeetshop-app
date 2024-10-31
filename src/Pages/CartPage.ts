import { Component } from '../Abstract/Component';

export class CartPage extends Component {
    constructor(parent: HTMLElement) {
        super(parent, 'div', ['cart_page']);

        new Component(this.node, 'p', null, 'Корзина');
    }
}
