import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

// This same as react redux but using reduxjs/toolkit
// here we can muttate code when we use reduxjs/toolkit

const counterSlice = createSlice({
	name: 'counter',
	initialState, // = initialState: initialState
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter = state.counter + action.amount;
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

const store = configureStore({
	reducer: counterSlice.reducer,
});

export default store;
