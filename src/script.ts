import { Component } from './Abstarct/Component';
import { Footer } from './Common/Footer';
import { Header } from './Common/Header';
import { Router } from './Common/Router';
import { Favorite } from './Pages/Favorite';
import { MainPage } from './Pages/MainPage';
import { Profile } from './Pages/Profile';
import { Shopping } from './Pages/Shopping';
import { Catalog } from './Pages/Catalog';
import { DetailsPage } from './Common/DetailsPage';
import './style.scss';
import { DBService } from './Services/DBService';
import { LogicService } from './Services/LogicService';
import { AuthPage } from './Pages/AuthPage';
import { RegPage } from './Pages/RegPage';
import { DeliveryPage } from './Pages/Delivery';

declare global {
	interface Window {
		app: App;
	}
}

const dbService = new DBService();

const logicService = new LogicService(dbService);

class App {
	constructor(parent: HTMLElement) {
		const wrapper = new Component(parent, 'div', ['wrapper']);
		const wrapperMain = new Component(wrapper.root, 'div', ['wrapper-main']);

		new Header(wrapperMain.root, logicService);

		const links = {
			'#': new MainPage(wrapperMain.root, logicService),
			'#profile': new Profile(wrapperMain.root, logicService),
			'#shopping': new Shopping(wrapperMain.root, logicService),
			'#favorite': new Favorite(wrapperMain.root, logicService),
			'#catalog': new Catalog(wrapperMain.root, logicService),
			'#auth': new AuthPage(wrapperMain.root, logicService),
			'#reg': new RegPage(wrapperMain.root, logicService),
			'#details': new DetailsPage(wrapperMain.root, logicService),
			'#delivery': new DeliveryPage(wrapperMain.root, logicService),
		};

		new Router(links, logicService);
		new Footer(wrapper.root);
	}
}

window.app = new App(document.body);
