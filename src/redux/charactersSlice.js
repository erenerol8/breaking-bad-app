import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk(
  "characters/getCharacters",
  async () => {
    const res = await axios(
      `https://breakingbadapi.com/api/characters?limit=14`
    );
    return res.data;
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.fulfilled]: (state, actions) => {
      state.items = actions.payload;
      state.isLoading = false;
    },
    [fetchCharacters.pending]: (state, actions) => {
      state.isLoading = true;
    },
    [fetchCharacters.rejected]: (state, actions) => {
      state.isLoading = false;
      state.error = actions.error.message;
    },
  },
});

export default charactersSlice.reducer;
