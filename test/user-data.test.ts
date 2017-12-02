import * as chai from 'chai';

import chaiHttp = require('chai-http');
import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('http://localhost:3000/user/data/', () => {

    it('Responds with the number of records - /count', () => {
        return chai.request(app).get('/user/data/count')
            .then(res => {
                expect(res.status).to.equal(200);
                expect(res).to.be.json;
            });
    });

    it('Responds with pagination - /pagination/:pagination/records/:records', () => {
        return chai.request(app).get('/user/data/pagination/2/records/10')
            .then(res => {
                expect(res.status).to.equal(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('array');
            });
    });

    it('Responds with single JSON object - /:id', () => {
        return chai.request(app).get('/user/data/5a2305973eaa168b52b939d7')
            .then(res => {
                expect(res.status).to.equal(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('object');
            });
    });

    it('Should update um registro - /:id', () => {
        let userData = {
            _id: "5a2305973eaa168b52b939d7",
            __v: 0,
            euid: "b93d88c2-6636-44a1-b093-973d71fe4c5e",
            deviceId: "5c91bb852c4eaec0",
            os: "android",
            osVersion: "6.0.1",
            deviceModel: "LGE LG K4 LTE",
            home: "-46.7194606 -23.6464292",
            work: "-46.7885983 -23.7018867",
            istInstalledApps: "Facebook Messenger|Youtube|Twitter",
            batteryState: 1,
            batteryPercentage: 85,
            arrival: "11-06-2017 16:31:27",
            departure: "11-06-2017 18:08:47",
            categorie: "Playground",
            venueName: "Playground - Praça do Pôr do Sol",
            venueTotalTime: 97,
            precision: 3,
            venueLngLat: "-46.703318492148675 -23.55298042202491",
            address: "R. Des. Ferreira França  1",
            city: "São Paulo",
            state: "SP",
            country: "Brasil"
        };

        return chai.request(app).put('/user/data/5a2305973eaa168b52b939d7').send(userData)
            .then(res => {
                expect(res.status).to.equal(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('object');
            });
    });

});
