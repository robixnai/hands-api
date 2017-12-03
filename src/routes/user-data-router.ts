import {Router} from "express";

import UserDataController from "../controllers/user-data-controller";

class UserDataRouter {

    router: Router;
    controller: UserDataController;

    constructor() {
        this.router = Router();
        this.controller = new UserDataController();
        this.routes();
    }

    routes() {
        this.router.get('/count', this.controller.size);
        this.router.get('/all', this.controller.all);
        this.router.get('/page/:page', this.controller.pagination);
        this.router.get('/:id', this.controller.one);
        this.router.put('/:id', this.controller.update);
    }

}

const userDataRouter = new UserDataRouter();
userDataRouter.routes();
export default userDataRouter.router;