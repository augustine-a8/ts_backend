import { DataSource } from "typeorm";
import Config from "../config";
import { UserEntity, ProfileEntity } from "./entities";
const { db } = Config;
const AppDataSource = new DataSource({
    type: "postgres",
    url: db.url ? db.url : "",
    username: db.user,
    password: db.password,
    database: db.database,
    entities: [UserEntity, ProfileEntity],
});
async function initializeDataSource() {
    console.log("Connecting to Database...");
    try {
        const ds = await AppDataSource.initialize();
        if (ds) {
            console.log("⚡ Successfully Connected to Database");
        }
        return ds;
    }
    catch (err) {
        console.log("Error Connecting to Database");
        throw new Error(err);
    }
}
export default {
    AppDataSource,
    initializeDataSource,
};
