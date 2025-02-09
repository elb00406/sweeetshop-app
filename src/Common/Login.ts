import { Component } from '../Abstract/Component';

export class Login extends Component {
	constructor(parent: HTMLElement) {
		super(parent, 'section', ['login']);

		new Component(this.root, 'h2', ['login-title'], 'Вход в личный кабинет');

		const form = new Component(this.root, 'form', ['login-form']);

		const fields = [
			{ placeholder: 'Фамилия, Имя', type: 'text' },
			{ placeholder: 'Телефон', type: 'tel' },
			{ placeholder: 'E-mail', type: 'email' },
		];

		fields.forEach((field) => {
			const input = new Component(form.root, 'input', ['form-input']);
			input.root.setAttribute('type', field.type);
			input.root.setAttribute('placeholder', field.placeholder);
		});

		const loginButton = new Component(
			form.root,
			'button',
			['button', 'primary'],
			'Войти'
		);
		loginButton.root.setAttribute('type', 'submit');

		const registerLink = new Component(
			this.root,
			'p',
			['register-link'],
			'Ещё нет аккаунта?'
		);

		new Component(
			registerLink.root,
			'span',
			['register-link--span'],
			'Зарегистрируйтесь'
		);
	}
}
