import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../services";
import { ROUTE, SLICE } from "../../constants";

const initialState = {
  entries: [],
};

const fetchPosition = createAsyncThunk("position/fetchPosition", async () => {
  return await api.get(ROUTE.POSITION).then((res) => res.data);
});

const deletePosition = createAsyncThunk(
  "position/deletePosition",
  async (props) => {
    const { id } = props;
    return await api
      .deleteById(`${ROUTE.POSITION}/${id}`)
      .then((res) => res.data);
  }
);

const updatePosition = createAsyncThunk(
  "position/updatePosition",
  async (props) => {
    const { id, body } = props;
    return await api
      .update(`${ROUTE.POSITION}/${id}`, body)
      .then((res) => res.data);
  }
);

const addPosition = createAsyncThunk("position/addPosition", async (props) => {
  return await api.post(ROUTE.POSITION, props.body).then((res) => res.data);
});

const slice = createSlice({
  name: SLICE.POSITION,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosition.fulfilled, (state, action) => {
      state.entries = action.payload.data;
    });

    builder.addCase(deletePosition.fulfilled, (state, action) => {
      state.entries = state.entries.filter((e) => {
        return e._id != action.payload.data._id;
      });
    });

    builder.addCase(addPosition.fulfilled, (state, action) => {
      state.entries.push(action.payload.data);
    });
  },
});

const { reducer } = slice;
export { fetchPosition, deletePosition, updatePosition, addPosition };
export default reducer;
