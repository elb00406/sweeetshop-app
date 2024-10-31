import { Component } from '../Abstract/Component';

export class Header extends Component {
    constructor(parrent: HTMLElement) {
        super(parrent, 'header', ['header']);

        const nav = new Component(this.node, 'nav', ['nav']);

        const navWrap = new Component(nav.node, 'div', ['navWrap']);

        new Component(navWrap.node, 'a', null, 'Контакты', ['href'], ['#contacts']);
        new Component(navWrap.node, 'a', null, 'Каталог', ['href'], ['#catalog']);
        new Component(navWrap.node, 'a', null, 'Оплата и доставка', ['href'], ['#delivery']);

        new Component(
            this.node,
            'img',
            ['logo'],
            null,
            ['src', 'alt'],
            ['/assets/logo.png', 'лого'],
        );

        const infoBlock = new Component(this.node, 'div', ['infoBlock']);
        new Component(infoBlock.node, 'p', ['contacts'], 'Пн-Вс с 9.00-21.00 +375(29)526-37-56');

        const headerButtons = new Component(infoBlock.node, 'div', ['headerButtons']);
        const basketButton = new Component(
            headerButtons.node,
            'a',
            null,
            null,
            ['href'],
            ['#cart'],
        );
        const profileButton = new Component(
            headerButtons.node,
            'a',
            null,
            null,
            ['href'],
            ['#account'],
        );

        new Component(
            basketButton.node,
            'img',
            ['singleButton'],
            null,
            ['src', 'alt'],
            ['/assets/basket.svg', 'basket'],
        );

        new Component(
            profileButton.node,
            'img',
            ['singleButton'],
            null,
            ['src', 'alt'],
            ['/assets/profile.svg', 'basket'],
        );
    }
}
