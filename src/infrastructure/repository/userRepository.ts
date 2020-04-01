import {repositoryI} from "../../domain/ports/secondary/repositoryI";
import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {User} from "./entitys/user.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class UserRepository implements repositoryI {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}
     getAllUser:any = async()=> {
         return await this.usersRepository.find().then((data) => {
             return data
         }).catch((err) => {
         });
    };
}