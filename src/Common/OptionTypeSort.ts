import { TTypeGood } from '../Abstarct/Types';
import { LogicService } from '../Services/LogicService';
import { Component } from '../Abstarct/Component';

export class OptionTypeSort extends Component {
	constructor(parent: HTMLElement, title: string, value: string) {
		super(parent, 'option', [], title);

		this.root.setAttribute('value', value);
	}
}
