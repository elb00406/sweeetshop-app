import { Component } from '../Abstarct/Component';
import { LogicService } from '../Services/LogicService';
import { TGood } from '../Abstarct/Types';

export class Cart extends Component {
	constructor(
		parent: HTMLElement,
		private service: LogicService,
		private good: TGood
	) {
		super(parent, 'div', ['cart']);
		let priceCurrent = Math.floor(this.good.price / 100);

		const imgComponent = new Component(
			this.root,
			'img',
			['image__cart'],
			null,
			['src', 'alt'],
			[(this.good as any).photoLink, 'image']
		);

		new Component(this.root, 'h3', ['cart__title', 'abel'], this.good.title);

		const wrapperPrice = new Component(this.root, 'div', [
			'cart__wrapperPrice',
		]);

		new Component(wrapperPrice.root, 'p', ['cart__text', 'abel'], 'Цена:');
		new Component(
			wrapperPrice.root,
			'p',
			['cart__price', 'abel'],
			priceCurrent + ' BYN'
		);

		new Component(this.root, 'button', ['cart__add'], 'Добавить');

		imgComponent.root.onclick = () => {
			service.openPageDetails(good);
		};
	}
}
