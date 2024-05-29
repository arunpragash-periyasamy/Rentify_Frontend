import { createSlice } from "@reduxjs/toolkit";


const themeSlice = createSlice({
  name: "theme",
  initialState: {}, // Ensure initialState is provided here
  reducers: {
    
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
