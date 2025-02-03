import { Component } from '../Abstract/Component';
import { TGood } from '../Abstract/Types';
import LogicService from '../Services/logicService';

export class GoodItem extends Component {
	constructor(parent: HTMLElement, service: LogicService, private good: TGood) {
		super(parent, 'div', ['good_item']);
		let priceCurrent = this.good.price / 100;

		const img = new Component(
			this.node,
			'img',
			['good_image'],
			null,
			['src', 'alt'],
			[(this.good as any).photoLink, 'good.title']
		);

		new Component(this.node, 'p', ['good_name'], good.title);
		new Component(this.node, 'p', ['good__price'], priceCurrent + ' BYN');
	}
}
