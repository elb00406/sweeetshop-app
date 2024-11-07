// src/Services/logicService.ts
import DBService from './dbService';
import { Observer } from '../Abstract/Observer';

export default class LogicService extends Observer {
    private dbService: DBService;

    constructor(dbService: DBService) {
        super();
        this.dbService = dbService;
    }

    performLogic() {
        const data = this.dbService.getData();
        // Dispatch an event named "dataReceived" with the fetched data
        this.dispatch('dataReceived', data);
    }
}
