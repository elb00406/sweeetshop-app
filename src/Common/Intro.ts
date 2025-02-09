import { Component } from '../Abstract/Component';

export class Intro extends Component {
	constructor(parrent: HTMLElement) {
		super(parrent, 'section', ['intro']);

		new Component(
			this.root,
			'div',
			['name'],
			'ОАО “Берестейский пекарь” - с заботой о каждой крошке! '
		);

		const button = new Component(
			this.root,
			'a',
			null,
			null,
			['href'],
			['/#catalog']
		);

		new Component(
			button.root,
			'button',
			['button', 'primary'],
			'Перейти в каталог'
		);
	}
}
