import { Component } from '../Abstract/Component';

export class Login extends Component {
	constructor(parent: HTMLElement) {
		super(parent, 'section', ['login']);

		new Component(this.node, 'h2', ['login-title'], 'Вход в личный кабинет');

		const form = new Component(this.node, 'form', ['login-form']);

		const fields = [
			{ placeholder: 'Фамилия, Имя', type: 'text' },
			{ placeholder: 'Телефон', type: 'tel' },
			{ placeholder: 'E-mail', type: 'email' },
		];

		fields.forEach((field) => {
			const input = new Component(form.node, 'input', ['form-input']);
			input.node.setAttribute('type', field.type);
			input.node.setAttribute('placeholder', field.placeholder);
		});

		const loginButton = new Component(
			form.node,
			'button',
			['button', 'primary'],
			'Войти'
		);
		loginButton.node.setAttribute('type', 'submit');

		const registerLink = new Component(
			this.node,
			'p',
			['register-link'],
			'Ещё нет аккаунта?'
		);

		new Component(
			registerLink.node,
			'span',
			['register-link--span'],
			'Зарегистрируйтесь'
		);
	}
}
