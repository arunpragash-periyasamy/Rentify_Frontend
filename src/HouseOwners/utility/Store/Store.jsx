import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Slices/ThemeSlice";

const reducer = {
    theme: themeReducer
}

const store = configureStore({
    reducer
})

export default store;