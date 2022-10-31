import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "@/services";
import { ROUTE, SLICE } from "@/constants";

const initialState = {
  entries: [],
};

const fetchAdopter = createAsyncThunk("adopter/fetchAdopter", async () => {
  return await api
    .get(`${ROUTE.ADOPTER}?populate=animals`)
    .then((res) => res.data);
});

const updateAdopter = createAsyncThunk(
  "adopter/updateAdopter",
  async (props) => {
    const { id, body } = props;
    return await api
      .update(`${ROUTE.ADOPTER}/${id}`, body)
      .then((res) => res.data);
  }
);

const addAdopter = createAsyncThunk("adopter/addAdopter", async (props) => {
  return await api.post(ROUTE.ADOPTER, props.body).then((res) => res.data);
});

const slice = createSlice({
  name: SLICE.ADOPTER,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAdopter.fulfilled, (state, action) => {
      console.log(state, action);
      state.entries = action.payload.data;
    });

    builder.addCase(addAdopter.fulfilled, (state, action) => {
      state.entries.push(action.payload.data);
    });
  },
});

const { reducer } = slice;
export { fetchAdopter, updateAdopter, addAdopter };
export default reducer;
