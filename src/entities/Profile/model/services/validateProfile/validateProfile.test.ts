import { TestAsync } from 'shared/lib/tests/TestAsync/TestAsync';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile';
import { validateProfile } from './validateProfile';

const data = {
    username: 'admin',
    age: 25,
    country: Country.Russia,
    lastname: 'Medvedev',
    first: 'Sergey',
    city: 'EKB',
    currency: Currency.RUB,
};
describe('validateProfile.test', () => {
    test('success', async () => {
        const result = validateProfile(data);
        expect(result).toEqual([]);
    });
    test('without firstname and lastname', async () => {
        const result = validateProfile({ ...data, first: '', lastname: '' });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
    test('incorrect age', async () => {
        const result = validateProfile({ ...data, age: undefined });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
    test('incorrect country', async () => {
        const result = validateProfile({ ...data, country: undefined });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
    test('incorrect all', async () => {
        const result = validateProfile({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
