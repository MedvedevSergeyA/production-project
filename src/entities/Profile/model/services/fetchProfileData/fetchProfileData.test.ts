import { TestAsync } from 'shared/lib/tests/TestAsync/TestAsync';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { fetchProfileData } from './fetchProfileData';

const data = {
    username: 'admin',
    age: 25,
    country: Country.Russia,
    lastname: 'Medvedev',
    first: 'Sergey',
    city: 'EKB',
    currency: Currency.RUB,
};
describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsync(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
    test('rejected', async () => {
        const thunk = new TestAsync(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 400 }));
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
