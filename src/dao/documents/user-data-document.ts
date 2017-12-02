import {Document} from "mongoose";

interface UserDataDocuement extends Document {

    euid: string,
    deviceId: string,
    os: string,
    osVersion: string,
    deviceModel: string,
    home: string,
    work: string,
    istInstalledApps: string,
    batteryState: number,
    batteryPercentage: number,
    arrival: string,
    departure: string,
    categorie: string,
    venueName: string,
    venueTotalTime: number,
    precision: number,
    venueLngLat: string,
    address: string,
    city: string,
    state: string,
    country: string

}

export default UserDataDocuement;