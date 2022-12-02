import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCharacters = createAsyncThunk(
  characters / getCharacters,
  async () => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/characters`
    );
    return res.data;
  }
);
export const charactersSlicer = createSlice({
  name: "characters",
  initialState: {
    item: [],
  },
  reducers: {},
  extraReducers: {},
});

export default charactersSlicer.reducer;
