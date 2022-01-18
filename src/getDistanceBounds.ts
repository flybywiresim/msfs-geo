import { Coordinates, NauticalMiles } from './common';
import { DEG_TO_RAD, EARTH_RADIUS, MAX_LAT, MAX_LON, MIN_LAT, MIN_LON, RAD_TO_DEG } from './constants';

/**
 * Returns the Southwest and Northeast corner of a box around a point with a minimum distance
 * @param centre - The centre of the box
 * @param distance - Half the side length of the box, the minimum distance to the centre
 */
export const getDistanceBounds = (
    centre: Coordinates,
    distance: NauticalMiles,
): [Coordinates, Coordinates] => {
    const radLat = DEG_TO_RAD(centre.lat);
    const radLong = DEG_TO_RAD(centre.long);

    const radDist = distance / EARTH_RADIUS;
    let minLat = radLat - radDist;
    let maxLat = radLat + radDist;

    const MAX_LAT_RAD = DEG_TO_RAD(MAX_LAT);
    const MIN_LAT_RAD = DEG_TO_RAD(MIN_LAT);
    const MAX_LON_RAD = DEG_TO_RAD(MAX_LON);
    const MIN_LON_RAD = DEG_TO_RAD(MIN_LON);

    let minLong;
    let maxLong;

    if (minLat > MIN_LAT_RAD && maxLat < MAX_LAT_RAD) {
        const deltaLong = Math.asin(Math.sin(radDist) / Math.cos(radLat));
        minLong = radLong - deltaLong;

        if (minLong < MIN_LON_RAD) {
            minLong += Math.PI * 2;
        }

        maxLong = radLong + deltaLong;

        if (maxLong > MAX_LON_RAD) {
            maxLong -= Math.PI * 2;
        }
    } else {
        // A pole is within the distance.
        minLat = Math.max(minLat, MIN_LAT_RAD);
        maxLat = Math.min(maxLat, MAX_LAT_RAD);
        minLong = MIN_LON_RAD;
        maxLong = MAX_LON_RAD;
    }

    return [
        // Southwest
        {
            lat: RAD_TO_DEG(minLat),
            long: RAD_TO_DEG(minLong),
        },
        // Northeast
        {
            lat: RAD_TO_DEG(maxLat),
            long: RAD_TO_DEG(maxLong),
        },
    ];
};
