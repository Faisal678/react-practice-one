import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    result: [],
    counts: { fizz: 0, buzz: 0, fizzBuzz: 0 }
};

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers: {
        runTest: (state, action) => {
            const number = action.payload;

            if (number % 3 === 0 || number % 5 === 0) {
                for (let i = 1; i <= number; i++) {
                    if (i % 3 === 0 && i % 5 === 0) {
                        state.result.push('FizzBuzz');
                        state.counts.fizzBuzz++;
                    } else if (i % 3 === 0) {
                        state.result.push('Fizz');
                        state.counts.fizz++;
                    } else if (i % 5 === 0) {
                        state.result.push('Buzz');
                        state.counts.buzz++;
                    }
                }
            } else {
                state.result.push(number);
            }
        },
        resetState: (state) => {
            state.result = [];
            state.counts = { fizz: 0, buzz: 0, fizzBuzz: 0 };
        }
    }
});

export const { runTest, resetState } = counterSlice.actions;
export default counterSlice.reducer;
