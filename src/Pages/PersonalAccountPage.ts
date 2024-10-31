import { Component } from '../Abstract/Component';

export class PersonalAccountPage extends Component {
    constructor(parent: HTMLElement) {
        super(parent, 'div', ['account_page']);

        new Component(this.node, 'p', null, 'Личный кабинет');
    }
}
