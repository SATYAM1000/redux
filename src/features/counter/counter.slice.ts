import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// crreate slice will be used for writing logics

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 10,
};

// create slice takes 1 argument as an object that contains the name of the slice and the initial state
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    incremented(state) {
      // it is okay to do this because immer makes it easy under the hood
      // no need to do state.value = state.value + 1
      state.value++;
    },

    decremented(state) {
      state.value--;
    },

    incrementByValue(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { incremented, decremented, incrementByValue, amountAdded } =
  counterSlice.actions;
export default counterSlice.reducer;



