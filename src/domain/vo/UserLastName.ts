import { InvalidArgument } from '../errors/InvalidArgument';

export class UserLastName  {
    readonly value: string;
    constructor(value: string) {
        this.value = value;
        this.ensureLengthIsLessThan0Characters(value);
    }
    private ensureLengthIsLessThan0Characters(value: string): void {
        if (value.length < 2) {
            throw new InvalidArgument(`The User last name <${value}> has less than 2 characters`);
        }
    }
    toString(): string {
        return this.value;
    }
}