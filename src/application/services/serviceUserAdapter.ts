import {Inject, Injectable} from "@nestjs/common";
import  { repositoryI }  from "../../domain/ports/secondary/repositoryI";
import {serviceUserI} from "./serviceUserI";

@Injectable()
export class  ServiceUserAdapter implements serviceUserI {

    constructor(@Inject('repositoryI') private repository: repositoryI) {
    }
    getAllUser(): string[] {
        return this.repository.getAllUser();
    }
}