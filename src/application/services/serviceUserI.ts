import {User} from "../../domain/User";

export interface serviceUserI {
    getAllUser():Promise<User[]>;
}