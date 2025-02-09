import { Component } from '../Abstarct/Component';
import { LogicService } from '../Services/LogicService';

export class Favorite extends Component {
	stateUpdate: boolean = false;
	constructor(parent: HTMLElement, private service: LogicService) {
		super(parent, 'div', ['profile']);

		new Component(
			this.root,
			'h1',
			['profile__title', 'imperial'],
			'Эта страница для отображения закладок'
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
