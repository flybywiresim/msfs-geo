import { Coordinates, DegreesTrue } from './common';
import { atan2, cos, sin } from './trig';

/**
 * Calculates the bearing from one point to another (referenced at the first coordinate, bearing can be different at different points between the two)
 * @param from From location
 * @param to To location
 */
export function bearingTo(from: Coordinates, to: Coordinates): DegreesTrue;
/**
 * Calculates the bearing from one point to another (referenced at the first coordinate, bearing can be different at different points between the two)
 * @param fromLat from location latitude
 * @param fromLon from location longitude
 * @param toLat to location latitude
 * @param toLon toLocation longitude
 */
export function bearingTo(fromLat: number, fromLon: number, toLat: number, toLon: number): DegreesTrue;

/**
 * Calculates the bearing from one point to another (referenced at the first coordinate, bearing can be different at different points between the two)
 * @param from
 * @param to
 */
export function bearingTo(fromLatOrFrom: Coordinates | number, fromLonOrTo: Coordinates | number, toLatOr?: number, toLonOr?: number): DegreesTrue {
    const fromLat = (typeof fromLatOrFrom === 'number' ? fromLatOrFrom : fromLatOrFrom.lat) as number;
    const fromLon = (typeof fromLatOrFrom === 'number' ? fromLonOrTo : fromLatOrFrom.long) as number;
    const toLat = (typeof fromLonOrTo === 'number' ? toLatOr : fromLonOrTo.lat) as number;
    const toLon = (typeof fromLonOrTo === 'number' ? toLonOr : fromLonOrTo.long) as number;

    return (atan2(
        sin(toLon! - fromLon)
                * cos(toLat),
        cos(fromLat) * sin(toLat)
                - sin(fromLat)
                * cos(toLat)
                * cos(toLon - fromLon),
    ) + 360)
    % 360;
}
