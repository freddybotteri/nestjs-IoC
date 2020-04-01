import { serviceUserI } from "../application/services/serviceUserI";
import {ServiceUserAdapter} from "../application/services/serviceUserAdapter";

import { repositoryI } from "../domain/ports/secondary/repositoryI";
import { Repository } from "../infrastructure/repository/repository";

import {Provider} from "@nestjs/common";
    export const ServiceUserProvider: Provider = {
        provide: 'serviceUserI',
        useClass: ServiceUserAdapter,
    };
    export const RepositoryUserProvider: Provider = {
        provide: 'repositoryI',
        useClass: Repository,
    };


