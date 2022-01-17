import { Degrees } from './common';
import { DEG_TO_RAD, RAD_TO_DEG } from './constants';

export const sin = (angle: Degrees) => Math.sin(DEG_TO_RAD(angle));
export const cos = (angle: Degrees) => Math.cos(DEG_TO_RAD(angle));
export const tan = (angle: Degrees) => Math.tan(DEG_TO_RAD(angle));

export function asin(angle: number): Degrees {
    return RAD_TO_DEG(Math.asin(angle));
}
export function acos(angle: number): Degrees {
    return RAD_TO_DEG(Math.acos(angle));
}
export function atan(angle: number): Degrees {
    return RAD_TO_DEG(Math.atan(angle));
}

export function atan2(y: number, x: number): Degrees {
    return RAD_TO_DEG(Math.atan2(y, x));
}
