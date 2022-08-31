import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api.service";
import CONST from "../../constants/index";

const initialState = {
  entries: [],
};

export const fetchData = createAsyncThunk("personnel/fetchData", async () => {
  return await api
    .get(`${CONST.ROUTE.PERSONNEL}?populate=position`)
    .then((res) => res.data);
});

export const updateData = createAsyncThunk(
  "personnel/updateData",
  async (props) => {
    const { id, body } = props;
    return await api
      .update(`${CONST.ROUTE.PERSONNEL}/${id}`, body)
      .then((res) => res.data);
  }
);

export const addData = createAsyncThunk("personnel/addData", async (props) => {
  return await api
    .post(CONST.ROUTE.PERSONNEL, props.body)
    .then((res) => res.data);
});

export const slice = createSlice({
  name: CONST.SLICE.PERSONNEL,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.entries = action.payload.data;
    });

    builder.addCase(addData.fulfilled, (state, action) => {
      state.entries.push(action.payload.data);
    });
  },
});

export default slice.reducer;
