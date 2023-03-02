import { StateSchema } from 'app/providers/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit/dist/createAsyncThunk';

type ActionCreatorType <Return, Arg, RejectValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectValue}>

export class TestAsync<Return, Arg, RejectValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Return, Arg, RejectValue>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
}
