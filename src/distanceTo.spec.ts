import { distanceTo } from './distanceTo';

describe('distanceTo', () => {
    it('should calculate the distance between any two points', () => {
        expect(
            distanceTo(
                { lat: 52.518611, long: 13.408056 },
                { lat: 51.519475, long: 7.46694444 },
            ),
        ).toBeCloseTo(227.74647067942598);

        expect(
            distanceTo(52.518611, 13.408056, 51.519475, 7.46694444),
        ).toBeCloseTo(227.74647067942598);

        expect(
            distanceTo(
                { lat: 37.774514, long: -122.418079 },
                { lat: 51.519475, long: 7.46694444 },
            ),
        ).toBeCloseTo(4841.885420848646);

        expect(
            distanceTo(37.774514, -122.418079, 51.519475, 7.46694444),
        ).toBeCloseTo(4841.885420848646);
    });

    it('should return 0 if two identical points are given', () => {
        expect(
            distanceTo(
                { lat: 51.516241843, long: 7.456494328 },
                { lat: 51.516241843, long: 7.456494328 },
            ),
        ).toBeCloseTo(0);

        expect(
            distanceTo(51.516241843, 7.456494328, 51.516241843, 7.456494328),
        ).toBeCloseTo(0);

        expect(
            distanceTo(51.516241842, 7.456494328, 51.516241842, 7.456494328),
        ).toBeCloseTo(0);
    });
});
