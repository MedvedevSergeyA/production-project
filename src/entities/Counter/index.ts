import { counterReducer } from 'entities/Counter/model/slice/counterSlice';
import type { CounterSchema } from './model/types/counterSchema';
import { Counter } from './ui/Counter';

export {
    counterReducer,
    Counter,
    CounterSchema,
};
