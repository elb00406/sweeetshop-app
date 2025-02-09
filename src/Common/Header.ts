import { Component } from '../Abstarct/Component';
import { LogicService } from '../Services/LogicService';

export class Header extends Component {
	constructor(parent: HTMLElement, private service: LogicService) {
		super(parent, 'header', ['header']);

		// Левая часть хедера
		const leftNav = new Component(this.root, 'nav', [
			'header-nav',
			'header-nav-left',
		]);
		const leftList = new Component(leftNav.root, 'ul', ['nav-list']);

		// Каталог
		const catalogItem = new Component(leftList.root, 'li', ['nav-item']);
		new Component(
			catalogItem.root,
			'a',
			['nav-link'],
			'Каталог',
			['href'],
			['#catalog']
		);

		// Оплата и доставка
		const deliveryItem = new Component(leftList.root, 'li', ['nav-item']);
		new Component(
			deliveryItem.root,
			'a',
			['nav-link'],
			'Оплата и доставка',
			['href'],
			['#delivery']
		);

		// Центральная часть - логотип
		const logoWrapper = new Component(this.root, 'div', ['logo-wrapper']);
		const linkLogo = new Component(
			logoWrapper.root,
			'a',
			['link-logo'],
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
			['./assets/svg/logo.svg', 'Logo']
		);

		// Правая часть хедера
		const rightNav = new Component(this.root, 'nav', [
			'header-nav',
			'header-nav-right',
		]);
		const rightList = new Component(rightNav.root, 'ul', ['nav-list']);

		// Телефон
		const phoneItem = new Component(rightList.root, 'li', ['nav-item']);
		const divPhone = new Component(phoneItem.root, 'div', ['phone-link']);

		new Component(divPhone.root, 'p', null, 'Пн-Вс с 9.00-21.00');
		new Component(divPhone.root, 'p', null, '+375(29)526-37-56');

		// Корзина
		const cartItem = new Component(rightList.root, 'li', ['nav-item']);
		const cartLink = new Component(
			cartItem.root,
			'a',
			['cart-link'],
			null,
			['href'],
			['#shopping']
		);
		new Component(
			cartLink.root,
			'img',
			['cart-icon'],
			null,
			['src', 'alt'],
			['./assets/svg/basket.svg', 'Корзина']
		);

		// Профиль
		const profileItem = new Component(rightList.root, 'li', ['nav-item']);
		const profileLink = new Component(
			profileItem.root,
			'a',
			['profile-link'],
			null,
			['href'],
			['#profile']
		);
		new Component(
			profileLink.root,
			'img',
			['profile-icon'],
			null,
			['src', 'alt'],
			['./assets/svg/prf.svg', 'Профиль']
		);
	}
}
