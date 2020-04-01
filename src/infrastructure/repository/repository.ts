import {repositoryI} from "../../domain/ports/secundary/repositoryI";
import {Injectable} from "@nestjs/common";
import {getManager} from "typeorm";
import {User} from "./entitys/user.entity";

@Injectable()
export class Repository implements repositoryI {
    getAllUser =  ()=> {

        return getManager().find(User);
    };
}