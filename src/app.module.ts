import {Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserControllerAdapter } from "./infrastructure/rest/UserControllerAdapter";
import {User} from "./infrastructure/repository/entitys/user.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ServiceUserProvider,RepositoryUserProvider} from "./containerdependencies/dependencies";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'evoluciona',
    entities: [User],
    synchronize: true,
  })],
  controllers: [AppController,UserControllerAdapter],
  providers: [AppService,ServiceUserProvider,RepositoryUserProvider],
  exports: []
})
export class AppModule {}
