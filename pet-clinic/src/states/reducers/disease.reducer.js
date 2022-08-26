import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api.service";
import CONST from "../../constants/index";

const initialState = {
  entries: [],
};

export const fetchData = createAsyncThunk("disease/fetchData", async () => {
  return await api.get(CONST.ROUTE.DISEASE).then((res) => res.data);
});

export const deleteData = createAsyncThunk(
  "disease/deleteData",
  async (props) => {
    const { id } = props;
    return await api
      .deleteById(`${CONST.ROUTE.DISEASE}/${id}`)
      .then((res) => res.data);
  }
);

export const updateData = createAsyncThunk(
  "disease/updateData",
  async (props) => {
    const { id, body } = props;
    return await api
      .update(`${CONST.ROUTE.DISEASE}/${id}`, body)
      .then((res) => res.data);
  }
);

export const addData = createAsyncThunk("disease/addData", async (props) => {
  return await api.post(props.body).then((res) => res.data);
});

export const diseaseSlice = createSlice({
  name: "disease",
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

export default diseaseSlice.reducer;
