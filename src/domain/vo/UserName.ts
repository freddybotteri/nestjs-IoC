import { InvalidArgument } from '../errors/InvalidArgument';

export class UserName  {
    readonly value: string;
    constructor(value: string) {
        this.value = value;
        this.ensureLengthIsLessThan30Characters(value);
    }
    private ensureLengthIsLessThan30Characters(value: string): void {
        if (value.length < 2) {
            throw new InvalidArgument(`The User Name <${value}> has less than 2 characters`);
        }
    }
    toString(): string {
        return this.value;
    }
}