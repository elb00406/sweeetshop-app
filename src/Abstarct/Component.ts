export class Component {
	root: HTMLElement;

	constructor(
		public parent: HTMLElement,
		tagName: keyof HTMLElementTagNameMap,
		arrStyles?: string[] | null,
		content?: string | null,
		attrProp?: string[] | null,
		attrValue?: string[] | null
	) {
		this.root = document.createElement(tagName);

		if (arrStyles) {
			arrStyles.forEach((style) => {
				this.root.classList.add(style);
			});
		}

		if (content) {
			this.root.textContent = content;
		}

		if (attrProp && attrValue && attrProp.length === attrValue.length) {
			attrProp.forEach((prop, index) => {
				this.root.setAttribute(prop, attrValue[index]);
			});
		}

		this.render();
	}

	render() {
		this.parent.append(this.root);
	}

	remove() {
		this.root.remove();
	}

	addClass(className: string) {
		this.root.classList.add(className);
	}

	removeClass(className: string) {
		this.root.classList.remove(className);
	}

	setContent(content: string) {
		this.root.textContent = content;
	}

	setAttribute(name: string, value: string) {
		this.root.setAttribute(name, value);
	}

	removeAttribute(name: string) {
		this.root.removeAttribute(name);
	}
}
