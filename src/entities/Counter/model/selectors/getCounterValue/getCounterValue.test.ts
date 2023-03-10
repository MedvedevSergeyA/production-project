import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getCounterValue.test', () => {
    const state: DeepPartial<StateSchema> = {
        counter: { value: 10 },
    };
    test('get value', () => {
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
