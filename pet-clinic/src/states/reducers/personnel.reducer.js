import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "@/services";
import { ROUTE, SLICE } from "@/constants";

const initialState = {
  entries: [],
};

const fetchPersonnel = createAsyncThunk(
  "personnel/fetchPersonnel",
  async () => {
    return await api
      .get(`${ROUTE.PERSONNEL}?populate=position`)
      .then((res) => res.data);
  }
);

const updatePersonnel = createAsyncThunk(
  "personnel/updatePersonnel",
  async (props) => {
    const { id, body } = props;
    return await api
      .update(`${ROUTE.PERSONNEL}/${id}`, body)
      .then((res) => res.data);
  }
);

const addPersonnel = createAsyncThunk(
  "personnel/addPersonnel",
  async (props) => {
    return await api.post(ROUTE.PERSONNEL, props.body).then((res) => res.data);
  }
);

const slice = createSlice({
  name: SLICE.PERSONNEL,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPersonnel.fulfilled, (state, action) => {
      state.entries = action.payload.data;
    });

    builder.addCase(addPersonnel.fulfilled, (state, action) => {
      state.entries.push(action.payload.data);
    });
  },
});

const { reducer } = slice;
export { fetchPersonnel, updatePersonnel, addPersonnel };
export default reducer;
