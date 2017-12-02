import {Request, Response} from "express";

import UserData from "../models/user-data";

class UserDataController {

    public size(request: Request, response: Response): void {
        UserData.getSize().then((data) => {
            response.status(200).json({data});
        }).catch((error) => {
            response.status(500).json({error});
        });
    }

    public all(request: Request, response: Response): void {
        UserData.getAll().then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            response.status(500).json({error});
        });
    }

    public pagination(request: Request, response: Response): void {
        const page: number = request.params.page;

        UserData.getToPage(page, 10).then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            response.status(500).json({error});
        });
    }

    public one(request: Request, response: Response): void {
        const id: number = request.params.id;

        UserData.getById(id).then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            response.status(500).json({error});
        });
    }

    public update(request: Request, response: Response): void {
        const id: number = request.params.id;

        UserData.updateUserData(id, request.body).then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            response.status(500).json({error});
        });
    }

}

export default UserDataController;