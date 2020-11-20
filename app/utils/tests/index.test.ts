import { getTodayDate } from '../index';

describe('GetTodayDate', () => {
    it('Returns a valid date', () => {
        const todayDate = getTodayDate();
        expect(todayDate).toMatch(/^[0-9]{4}-[0-9]{2}-[0-9]{2}/);
    });
});
