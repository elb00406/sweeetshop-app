import { Component } from './Abstract/Component';
import { Page } from './Abstract/interfeces';
import { Footer } from './Common/Footer';
import { Header } from './Common/Header';
import { Router } from './Common/Router';
import { CartPage } from './Pages/CartPage';
import { CatalogPage } from './Pages/CatalogPage';
import { DeliveryPage } from './Pages/DeliveryPage';
import { MainPage } from './Pages/MainPage';
import { PersonalAccountPage } from './Pages/PersonalAccountPage';
import { DBService } from './Services/dbService';
import { LogicService } from './Services/logicService';

const dbService = new DBService();
const logicService = new LogicService(dbService);

export class App {
	constructor(parrent: HTMLElement) {
		const wrap = new Component(parrent, 'div', ['wrapper']);

		new Header(wrap.root);

		const main = new Component(wrap.root, 'main');

		const links = {
			'#': new MainPage(main.root, logicService),
			'#account': new PersonalAccountPage(main.root),
			'#catalog': new CatalogPage(main.root, logicService),
			'#delivery': new DeliveryPage(main.root),
			'#cart': new CartPage(main.root),
		};

		new Router(links);

		new Footer(wrap.root);
	}
}
