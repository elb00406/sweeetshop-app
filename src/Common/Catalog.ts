import { Component } from '../Abstract/Component';

export class Catalog extends Component {
    constructor(parent: HTMLElement) {
        super(parent, 'section', ['catalog']);

        new Component(this.node, 'p', null, 'catalog');
    }
}
