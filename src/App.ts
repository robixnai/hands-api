import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as cors from 'cors';

import ImportDbRouter from './routes/import-db-router';
import UserDataRouter from './routes/user-data-router';

class App {

  public express: express.Application;

  constructor() {
    this.express = express();

    this.mongoose();
    this.middleware();
    this.cors();
    this.routes();
  }

  private mongoose(): void {
      const MONGO_URI: string = 'mongodb://localhost/hands';
      mongoose.connect(MONGO_URI || process.env.MONGODB_URI, {
          useMongoClient: true
      });
  }

  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(cookieParser());
    this.express.use(compression());
    this.express.use(helmet());
    this.express.use(cors());
  }

  private cors(): void {
    this.express.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
        res.header('Access-Control-Allow-Credentials', 'true');
        next();
    });
  }

  private routes(): void {
      const router: express.Router = express.Router();

      this.express.use('/', router);
      this.express.use('/import/db', ImportDbRouter);
      this.express.use('/user/data', UserDataRouter);
  }

}

export default new App().express;
