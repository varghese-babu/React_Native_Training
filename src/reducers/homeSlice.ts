import { createSlice } from '@reduxjs/toolkit';

interface HomeSliceType {
  value: string;
}

const initialState: HomeSliceType = {
  value: ''
};

const homeSlice = createSlice({
  name: 'Home',
  initialState,
  reducers: {
    addValue: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { addValue } = homeSlice.actions;
export default homeSlice.reducer;
