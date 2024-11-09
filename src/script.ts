import { App } from "./App";
import "./styles.scss";
import DBService from "./Services/dbService";
import LogicService from "./Services/logicService";

const app = new App(document.body);

const dbService = new DBService();

const logicService = new LogicService(dbService);

window.app = app;
window.dbService = dbService;
window.logicService = logicService;
