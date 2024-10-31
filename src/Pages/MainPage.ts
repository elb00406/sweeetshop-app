import { Component } from '../Abstract/Component';
import { Catalog } from '../Common/Catalog';
import { Intro } from '../Common/Intro';

export class MainPage extends Component {
    constructor(parent: HTMLElement) {
        super(parent, 'div', ['main_page']);

        new Intro(this.node);
        new Catalog(this.node);
    }
}
