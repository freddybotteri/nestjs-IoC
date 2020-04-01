import { UserName } from './vo/UserName';
import { UserLastName } from './vo/UserLastName';
import { UserId } from './vo/UserId';
import { UserActive } from './vo/UserActive';

export class User {
    readonly id: UserId;
    readonly firstName: UserName;
    readonly lastName: UserLastName;
    readonly isActive: UserActive;

    constructor(id: UserId, firstName: UserName, lastName: UserLastName,isActive:UserActive) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.isActive = isActive;
    }
    static fromPrimitives(plainData: any): User {
        return new User(
            new UserId(plainData.id),
            new UserName(plainData.firstName),
            new UserLastName(plainData.lastName),
            new UserActive(plainData.isActive)
        );
    }
    toPrimitives(): any {
        return {
            id: this.id.value,
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            isActive: this.isActive.value
        };
    }
}