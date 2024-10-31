import { Component } from '../Abstract/Component';

export class CatalogPage extends Component {
    constructor(parent: HTMLElement) {
        super(parent, 'div', ['catalog_page']);

        new Component(this.node, 'p', null, 'Страница Каталога');
    }
}
