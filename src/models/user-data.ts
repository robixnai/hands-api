import {DocumentQuery, Query} from "mongoose";

import UserDateSchema from "../dao/schemas/user-data-schema";
import UserDataDocuement from "../dao/documents/user-data-document";

class UserData {

    public static getSize(): Query<number> {
        return UserDateSchema.find().count();
    }

    public static getAll(): DocumentQuery<UserDataDocuement[], UserDataDocuement> {
        return UserDateSchema.find();
    }

    public static getToPage(page: number, nPerPage: number): DocumentQuery<UserDataDocuement[], UserDataDocuement> {
        return UserDateSchema.find().skip(page > 0 ? ((page - 1) * nPerPage) : 0).limit(nPerPage);
    }

    public static getById(id: number): DocumentQuery<UserDataDocuement | null, UserDataDocuement> {
        return UserDateSchema.findById(id);
    }

    public static updateUserData(id: number, userDate: UserDataDocuement): DocumentQuery<UserDataDocuement | null, UserDataDocuement> {
        return UserDateSchema.findByIdAndUpdate(id, userDate);
    }

}

export default UserData;