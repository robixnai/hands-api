import {Request, Response} from "express";

import * as parser from "node-csv-parse";
import * as fs from "fs";

import ImportDb from "../models/import-db"

class ImportDbController {

    public importDb(request: Request, response: Response): void {
        fs.readFile('assets/base.csv', 'utf8', (err, data) => {
            let status: number = 500;
            let message: string = "Sem mensagem de erro";
            if(err) {
                status = 500;
                message = err.message;
            } else {
                ImportDb.insertDb(parser(data).asObjects()).then((data) => {
                    status = 200;
                    message = "Base de dados importada com sucesso";
                }).catch((error) => {
                    status = 400;
                    message = error
                });
            }
            response.status(status).json({
                message: message
            });
        });
    }

}

export default ImportDbController;