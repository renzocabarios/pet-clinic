import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "@/services";
import { ROUTE, SLICE, EVENT } from "@/constants";

const initialState = {
  entries: [],
};

const fetchAdoption = createAsyncThunk(
  `${SLICE.ADOPTION}/${EVENT.FETCH_ADOPTION}`,
  async () => {
    return await api
      .get(`${ROUTE.ADOPTION}?populate=adopter animal`)
      .then((res) => res.data);
  }
);

const addAdoption = createAsyncThunk(
  `${SLICE.ADOPTION}/${EVENT.ADD_ADOPTION}`,
  async (props) => {
    return await api
      .post(`${ROUTE.ADOPTION}`, props.body)
      .then((res) => res.data);
  }
);

const updateAdoptionStatus = createAsyncThunk(
  `${SLICE.ADOPTION}/${EVENT.UPDATE_ADOPTION_STATUS}`,
  async (props) => {
    const { id, status } = props;
    return await api
      .update(`${ROUTE.ADOPTION}/${id}/${ROUTE.STATUS}`, { status })
      .then((res) => res.data);
  }
);

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
