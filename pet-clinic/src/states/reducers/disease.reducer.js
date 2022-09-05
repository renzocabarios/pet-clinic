import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "@/services";
import { ROUTE, SLICE } from "@/constants";

const initialState = {
  entries: [],
};

const fetchDisease = createAsyncThunk("disease/fetchDisease", async () => {
  return await api.get(ROUTE.DISEASE).then((res) => res.data);
});

const deleteDisease = createAsyncThunk(
  "disease/deleteDiseaseDisease",
  async (props) => {
    const { id } = props;
    return await api
      .deleteById(`${ROUTE.DISEASE}/${id}`)
      .then((res) => res.data);
  }
);

const updateDisease = createAsyncThunk(
  "disease/updateDisease",
  async (props) => {
    const { id, body } = props;
    return await api
      .update(`${ROUTE.DISEASE}/${id}`, body)
      .then((res) => res.data);
  }
);

const addDisease = createAsyncThunk("disease/addDisease", async (props) => {
  return await api.post(props.body).then((res) => res.data);
});

const slice = createSlice({
  name: SLICE.DISEASE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDisease.fulfilled, (state, action) => {
      state.entries = action.payload.data;
    });

    builder.addCase(deleteDisease.fulfilled, (state, action) => {
      state.entries = state.entries.filter((e) => {
        return e._id != action.payload.data._id;
      });
    });

    builder.addCase(addDisease.fulfilled, (state, action) => {
      state.entries.push(action.payload.data);
    });
  },
});

const { reducer } = slice;
export { fetchDisease, deleteDisease, updateDisease, addDisease };
export default reducer;
