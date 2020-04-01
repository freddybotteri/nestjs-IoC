import { InvalidArgument } from '../errors/InvalidArgument';

export class UserId  {
    readonly value: number;
    constructor(value: number) {
        this.value = value;
        this.ensureLengthIsLessThan0Characters(value);
    }
    private ensureLengthIsLessThan0Characters(value: number): void {
        if (value < 0) {
            throw new InvalidArgument(`The User id <${value}> has more than 0 characters`);
        }
    }
}