import { Component } from '../Abstract/Component';

export class DeliveryPage extends Component {
    constructor(parent: HTMLElement) {
        super(parent, 'div', ['delivery_page']);

        new Component(this.node, 'p', null, 'DeliveryPage');
    }
}
