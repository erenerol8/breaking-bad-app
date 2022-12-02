import { configureStore } from "@reduxjs/toolkit";
import charactersSlicer from "./slicers/charactersSlicer";

export const store = configureStore({
  reducer: {
    characters: charactersSlicer,
  },
});
