import { Component } from '../Abstarct/Component';
import { LogicService } from '../Services/LogicService';

export class MainPage extends Component {
	stateUpdate: boolean = false;
	constructor(parent: HTMLElement, private service: LogicService) {
		super(parent, 'div', ['main-page']);

		const wrapper = new Component(this.root, 'div', ['main-container']);

		new Component(
			wrapper.root,
			'h1',
			['main-title'],
			'ОАО "Берестейский пекарь" - с заботой о каждой крошке!'
		);

		new Component(
			wrapper.root,
			'a',
			['main-page-button'],
			'Перейти в каталог',
			['href'],
			['#catalog']
		);
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
