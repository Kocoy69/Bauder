export class Time {

    static fromString(str) {
        return new Time(...str.split(":").map(el => Number(el)));
    }

    constructor(hours, minutes) {
        this.minutes = minutes;
        this.hours = hours;
    }

    toString() {
        return `${this.hours}:${this.minutes}`;
    }
}
export default Time;