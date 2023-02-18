import { Coordinates, NauticalMiles, robustAcos } from './common';
import { EARTH_RADIUS } from './constants';
import { cos, sin } from './trig';

/**
 * Calculates the distance between two coordinates on the globe
 * @param from From location
 * @param to To location
 */
export function distanceTo(from: Coordinates, to: Coordinates): NauticalMiles;
/**
 * Calculates the distance between two coordinates on the globe
 * @param fromLat from location latitude
 * @param fromLon from location longitude
 * @param toLat to location latitude
 * @param toLon toLocation longitude
 */
export function distanceTo(fromLat: number, fromLon: number, toLat: number, toLon: number): NauticalMiles;

export function distanceTo(fromLatOrFrom: Coordinates | number, fromLonOrTo: Coordinates | number, toLatOr?: number, toLonOr?: number): NauticalMiles {
    const fromLat = (typeof fromLatOrFrom === 'number' ? fromLatOrFrom : fromLatOrFrom.lat) as number;
    const fromLon = (typeof fromLatOrFrom === 'number' ? fromLonOrTo : fromLatOrFrom.long) as number;
    const toLat = (typeof fromLonOrTo === 'number' ? toLatOr : fromLonOrTo.lat) as number;
    const toLon = (typeof fromLonOrTo === 'number' ? toLonOr : fromLonOrTo.long) as number;

    return Math.acos(
        robustAcos(
            sin(toLat) * sin(fromLat)
                + cos(toLat)
                * cos(fromLat)
                * cos(fromLon as number - toLon),
        ),
    ) * EARTH_RADIUS;
}
