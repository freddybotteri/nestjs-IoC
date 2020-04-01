import {Inject, Injectable} from "@nestjs/common";
import {repositoryI} from "../../domain/ports/secondary/repositoryI";
import {serviceUserI} from "./serviceUserI";
import {User} from "../../domain/User";

@Injectable()
export class  ServiceUserAdapter implements serviceUserI {

    constructor(@Inject('repositoryI') private repository: repositoryI) {
    }
    async getAllUser(): Promise<Array<User>> {
        let data = await this.repository.getAllUser();
        let converter: User[] = [];
        converter = data.map(function (user) {
            return User.fromPrimitives(user);
        });
        return converter;
    }
}