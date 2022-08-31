import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api.service";
import CONST from "../../constants/index";

const initialState = {
  entries: [],
};

export const fetchAnimal = createAsyncThunk("animal/fetchAnimal", async () => {
  return await api.get(CONST.ROUTE.ANIMAL).then((res) => res.data);
});

export const deleteAnimal = createAsyncThunk(
  "animal/deleteAnimal",
  async (props) => {
    const { id } = props;
    return await api
      .deleteById(`${CONST.ROUTE.ANIMAL}/${id}`)
      .then((res) => res.data);
  }
);

export const updateAnimal = createAsyncThunk(
  "animal/updateAnimal",
  async (props) => {
    const { id, body } = props;
    return await api
      .update(`${CONST.ROUTE.ANIMAL}/${id}`, body)
      .then((res) => res.data);
  }
);

export const addAnimal = createAsyncThunk("animal/addAnimal", async (props) => {
  return await api.post(CONST.ROUTE.ANIMAL, props.body).then((res) => res.data);
});

export const slice = createSlice({
  name: CONST.SLICE.ANIMAL,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAnimal.fulfilled, (state, action) => {
      state.entries = action.payload.data;
    });

    builder.addCase(deleteAnimal.fulfilled, (state, action) => {});

    builder.addCase(addAnimal.fulfilled, (state, action) => {
      state.entries.push(action.payload.data);
    });
  },
});

export default slice.reducer;
