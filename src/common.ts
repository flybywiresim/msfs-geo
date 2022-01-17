export type Radians = number;

export type Degrees = number;
export type DegreesMagnetic = Degrees;
export type DegreesTrue = Degrees;
export type Feet = number;
export type Knots = number;
export type Latitude = Degrees;
export type Longitude = Degrees;
export type Metres = number;
export type Minutes = number;
export type NauticalMiles = number;

export interface Coordinates {
    lat: Latitude;
    long: Longitude;
}

export const robustAcos = (value: number): number => {
    if (value > 1) {
        return 1;
    }
    if (value < -1) {
        return -1;
    }

    return value;
};
