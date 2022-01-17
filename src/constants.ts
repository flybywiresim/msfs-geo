import { Degrees, Latitude, Longitude, Metres, NauticalMiles, Radians } from './common';

export function DEG_TO_RAD(value: Degrees): Radians {
    return value * (Math.PI / 180);
}
export function RAD_TO_DEG(value: Radians): Degrees {
    return value * (180 / Math.PI);
}
export function NM_TO_METRES(value: NauticalMiles): Metres {
    return value * 1852;
}
export function METRES_TO_NM(value: Metres): NauticalMiles {
    return value / 1852;
}

export const MIN_LAT: Latitude = -90;
export const MAX_LAT: Latitude = 90;
export const MIN_LON: Longitude = -180;
export const MAX_LON: Longitude = 180;

export const EARTH_RADIUS: NauticalMiles = 3443.91846652;
