import { Component } from '../Abstract/Component';
import { LogicService } from '../Services/logicService';

export class Header extends Component {
	constructor(parrent: HTMLElement) {
		super(parrent, 'header', ['header']);

		const nav = new Component(this.root, 'nav', ['nav']);

		const navWrap = new Component(nav.root, 'div', ['navWrap']);

		// new Component(navWrap.node, "a", null, "Контакты", ["href"], ["#contacts"]);
		new Component(navWrap.root, 'a', null, 'Каталог', ['href'], ['#catalog']);
		new Component(
			navWrap.root,
			'a',
			null,
			'Оплата и доставка',
			['href'],
			['#delivery']
		);

		const linkLogo = new Component(
			this.root,
			'a',
			['link__logo'],
			null,
			['href'],
			['#']
		);

		new Component(
			linkLogo.root,
			'img',
			['logo'],
			null,
			['src', 'alt'],
			['/assets/png/logo.png', 'лого']
		);

		const infoBlock = new Component(this.root, 'div', ['infoBlock']);
		new Component(
			infoBlock.root,
			'p',
			['contacts'],
			'Пн-Вс с 9.00-21.00 +375(29)526-37-56'
		);

		const headerButtons = new Component(infoBlock.root, 'div', [
			'headerButtons',
		]);
		const basketButton = new Component(
			headerButtons.root,
			'a',
			null,
			null,
			['href'],
			['#cart']
		);
		const profileButton = new Component(
			headerButtons.root,
			'a',
			null,
			null,
			['href'],
			['#account']
		);

		new Component(
			basketButton.root,
			'img',
			['singleButton'],
			null,
			['src', 'alt'],
			['/assets/svg/basket.svg', 'basket']
		);

		new Component(
			profileButton.root,
			'img',
			['singleButton'],
			null,
			['src', 'alt'],
			['/assets/svg/profile.svg', 'basket']
		);
	}
}
