import { Component } from '../Abstarct/Component';
import { LogicService } from '../Services/LogicService';

export class Shopping extends Component {
	stateUpdate: boolean = false;
	constructor(parent: HTMLElement, private service: LogicService) {
		super(parent, 'div', ['profile']);

		// Добавляем блок с пустой корзиной
		const emptyCartBlock = new Component(this.root, 'div', ['empty-cart']);

		// Добавляем иконку корзины
		new Component(
			emptyCartBlock.root,
			'img',
			['empty-cart__icon'],
			null,
			['src', 'alt'],
			['../assets/jpeg/shopping.png', 'Пустая корзина']
		);

		// Добавляем заголовок
		new Component(
			emptyCartBlock.root,
			'h2',
			['empty-cart__title'],
			'Ваша корзина пуста'
		);

		// Добавляем описание
		new Component(
			emptyCartBlock.root,
			'p',
			['empty-cart__text'],
			'Похоже, вы еще не добавили товары в корзину. Перейдите в каталог, чтобы выбрать любимые сладости!'
		);

		const catalogButton = new Component(
			emptyCartBlock.root,
			'button',
			['empty-cart__button'],
			'Перейти в каталог'
		);

		catalogButton.root.addEventListener('click', () => {
			window.location.hash = '#catalog';
		});
	}

	renderWithUpdate(): void {
		if (!this.stateUpdate) {
			this.update();
			this.stateUpdate = true;
		}
		this.render();
	}

	update(): void {}
}
