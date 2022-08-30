import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api.service";
import CONST from "../../constants/index";

const initialState = {
  entries: [],
};

export const fetchData = createAsyncThunk("position/fetchData", async () => {
  return await api.get(CONST.ROUTE.POSITION).then((res) => res.data);
});

export const deleteData = createAsyncThunk(
  "position/deleteData",
  async (props) => {
    const { id } = props;
    return await api
      .deleteById(`${CONST.ROUTE.POSITION}/${id}`)
      .then((res) => res.data);
  }
);

export const updateData = createAsyncThunk(
  "position/updateData",
  async (props) => {
    const { id, body } = props;
    return await api
      .update(`${CONST.ROUTE.POSITION}/${id}`, body)
      .then((res) => res.data);
  }
);

export const addData = createAsyncThunk("position/addData", async (props) => {
  return await api
    .post(CONST.ROUTE.POSITION, props.body)
    .then((res) => res.data);
});

export const slice = createSlice({
  name: CONST.SLICE.POSITION,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.entries = action.payload.data;
    });

    builder.addCase(deleteData.fulfilled, (state, action) => {
      state.entries = state.entries.filter((e) => {
        return e._id != action.payload.data._id;
      });
    });

    builder.addCase(addData.fulfilled, (state, action) => {
      state.entries.push(action.payload.data);
    });
  },
});

export default slice.reducer;
