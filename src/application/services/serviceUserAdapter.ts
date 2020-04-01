import {Inject, Injectable} from "@nestjs/common";
import  { repositoryI }  from "../../domain/ports/secundary/repositoryI";
import {serviceUserI} from "./serviceUserI";

@Injectable()
export class  ServiceUserAdapter implements serviceUserI {

    constructor(@Inject('repositoryI') private repository: repositoryI) {
    }
    getAllUser(): string[] {
        return this.repository.getAllUser();
    }
}