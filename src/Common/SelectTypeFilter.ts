import { LogicService } from '../Services/LogicService';
import { Component } from '../Abstarct/Component';
import { OptionTypeFilter } from './OptionTypeFilter';

export class SelectTypeFilter extends Component {
	constructor(
		parent: HTMLElement,
		service: LogicService,
		private key: string,
		private property: string[]
	) {
		super(parent, 'select', ['select__type']);

		new Component(this.root, 'option', [], 'Все', ['value'], ['all']);

		property.forEach((prop) => {
			new OptionTypeFilter(this.root, service, prop);
		});

		if (this.root) {
			this.root.onchange = (e) => {
				const select = e.target as HTMLSelectElement;
				const value = select.value;

				service.filterItemByTypeSneakers(value);
			};
		}
	}
}
