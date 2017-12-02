import {Schema, model} from "mongoose";

import UserDateDocument from "../documents/user-data-document";

let UserDataSchema: Schema = new Schema({

    euid: { type: String },
    deviceId: { type: String },
    os: { type: String },
    osVersion: { type: String },
    deviceModel: { type: String },
    home: { type: String },
    work: { type: String },
    istInstalledApps: { type: String },
    batteryState: { type: Number },
    batteryPercentage: { type: Number },
    arrival: { type: String },
    departure: { type: String },
    categorie: { type: String },
    venueName: { type: String },
    venueTotalTime: { type: Number },
    precision: { type: Number },
    venueLngLat: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String }

});

export default model<UserDateDocument>('UserDataDocuement', UserDataSchema);