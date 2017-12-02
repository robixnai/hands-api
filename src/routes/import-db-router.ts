import {Router} from "express";

import ImportDbController from "../controllers/import-db-controller";

class ImportDbRouter {

    router: Router;
    controller: ImportDbController;

    constructor() {
        this.router = Router();
        this.controller = new ImportDbController();
        this.routes();
    }

    routes() {
        this.router.get('/', this.controller.importDb);
    }

}

const importDbRouter = new ImportDbRouter();
importDbRouter.routes();

export default importDbRouter.router;