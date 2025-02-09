import { Component } from './Component';

export interface Page extends Component {
	stateUpdate: boolean;
	renderWithUpdate: () => void;
	update: () => void;
}
