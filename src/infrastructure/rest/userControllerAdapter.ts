import {Controller, Get, Inject} from "@nestjs/common";
import {userControllerI} from "./userControllerI";
import {serviceUserI} from "../../application/services/serviceUserI";
@Controller()
export class  UserControllerAdapter implements userControllerI {

    constructor( @Inject('serviceUserI') private serviceUser: serviceUserI) {}
    @Get('/users')
    getAllUser(): any {
        return this.serviceUser.getAllUser();
    }
}