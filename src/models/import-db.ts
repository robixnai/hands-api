import UserDateDocument from "../dao/documents/user-data-document";

class ImportDb {

    public static async insertDb(object: UserDateDocument[]): Promise<UserDateDocument> {
        let returnMessage;
        for (let userData of object) {
            try {
                returnMessage = await userData.save();
            } catch(e) {
                returnMessage = e;
                console.log(e)
            }
        }
        return returnMessage;
    }

}

export default ImportDb;