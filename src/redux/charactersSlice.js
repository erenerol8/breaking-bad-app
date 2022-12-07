import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const char_limit = 14;

export const fetchCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (page) => {
    const res = await axios(
      `https://breakingbadapi.com/api/characters?limit=${char_limit}&offset=${
        page * char_limit
      }`
    );
    return res.data;
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
    isLoading: false,
    page: 0,
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.fulfilled]: (state, actions) => {
      state.items = actions.payload;
      state.isLoading = false;
      state.page += 1;
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
