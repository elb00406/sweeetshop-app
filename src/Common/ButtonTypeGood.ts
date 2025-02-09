import { TTypeGood } from '../Abstract/Types';
import { LogicService } from '../Services/logicService';
import { Component } from '../Abstract/Component';

export class ButtonTypeGood extends Component {
	private static activeButton: ButtonTypeGood | null = null;

	constructor(
		parent: HTMLElement,
		service: LogicService,
		private typeGood: TTypeGood
	) {
		super(parent, 'button', ['criteria__button'], typeGood.title);

		this.root.onclick = () => {
			if (ButtonTypeGood.activeButton) {
				ButtonTypeGood.activeButton.removeActiveClass();
			}

			ButtonTypeGood.activeButton = this;
			this.addActiveClass();
			service.updateGoodsByType(typeGood.id.toString());
			console.log(typeGood.id);
		};
	}

	private addActiveClass() {
		this.root.classList.add('_active');
	}

	private removeActiveClass() {
		this.root.classList.remove('_active');
	}
}
