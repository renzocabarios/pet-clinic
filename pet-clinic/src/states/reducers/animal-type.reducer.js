import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../services";
import { ROUTE, SLICE } from "../../constants";

const initialState = {
  entries: [],
};

export const fetchAnimalType = createAsyncThunk(
  "animalType/fetchAnimalType",
  async () => {
    return await api.get(ROUTE.ANIMAL_TYPE).then((res) => res.data);
  }
);

export const deleteAnimalType = createAsyncThunk(
  "animalType/deleteAnimalType",
  async (props) => {
    const { id } = props;
    return await api
      .deleteById(`${ROUTE.ANIMAL_TYPE}/${id}`)
      .then((res) => res.data);
  }
);

export const updateAnimalType = createAsyncThunk(
  "animalType/updateAnimalType",
  async (props) => {
    const { id, body } = props;
    return await api
      .update(`${ROUTE.ANIMAL_TYPE}/${id}`, body)
      .then((res) => res.data);
  }
);

export const addAnimalType = createAsyncThunk(
  "animalType/addAnimalType",
  async (props) => {
    return await api
      .post(ROUTE.ANIMAL_TYPE, props.body)
      .then((res) => res.data);
  }
);

export const slice = createSlice({
  name: SLICE.ANIMAL_TYPE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAnimalType.fulfilled, (state, action) => {
      state.entries = action.payload.data;
    });

    builder.addCase(deleteAnimalType.fulfilled, (state, action) => {
      state.entries = state.entries.filter((e) => {
        return e._id != action.payload.data._id;
      });
    });

    builder.addCase(addAnimalType.fulfilled, (state, action) => {
      state.entries.push(action.payload.data);
    });
  },
});

export default slice.reducer;
