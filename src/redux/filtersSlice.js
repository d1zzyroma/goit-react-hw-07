import { createSlice } from "@reduxjs/toolkit";

// Виправляємо initialState на об'єкт з властивістю name
const initialState = { name: "" };

const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    // Змінюємо назву дії на changeFilter відповідно до вимог завдання
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Експортуємо дію changeFilter
export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
