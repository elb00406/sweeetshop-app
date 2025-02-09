import { LogicService } from '../Services/LogicService';
import { Component } from '../Abstarct/Component';

export class OptionTypeFilter extends Component {
	constructor(
		parent: HTMLElement,
		service: LogicService,
		private property: string
	) {
		super(parent, 'option', [], property, ['value'], [property]);
	}
}
