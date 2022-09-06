import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "@/services";
import { ROUTE, SLICE } from "@/constants";

const initialState = {
  entries: [],
};

const fetchAdoption = createAsyncThunk("adoption/fetchAdoption", async () => {
  return await api
    .get(`${ROUTE.ADOPTION}?populate=adopter animal`)
    .then((res) => res.data);
});

const slice = createSlice({
  name: SLICE.ADOPTION,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAdoption.fulfilled, (state, action) => {
      state.entries = action.payload.data;
    });

    builder.addCase(fetchAdoption.rejected, (state, action) => {
      state.entries = action.payload.data;
    });
  },
});

const { reducer } = slice;
export { fetchAdoption };
export default reducer;
