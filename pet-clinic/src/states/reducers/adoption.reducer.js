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

const addAdoption = createAsyncThunk("adoption/addAdoption", async (props) => {
  return await api
    .post(`${ROUTE.ADOPTION}`, props.body)
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

    builder.addCase(addAdoption.fulfilled, (state, action) => {
      state.entries.push(action.payload.data);
    });
  },
});

const { reducer } = slice;
export { fetchAdoption, updateAdoptionStatus, addAdoption };
export default reducer;
