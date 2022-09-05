import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "@/services";
import { ROUTE, SLICE } from "@/constants";

const initialState = {
  entries: [],
};

const fetchUser = createAsyncThunk("position/fetchUser", async () => {
  return await api.get(ROUTE.USER).then((res) => res.data);
});

const deleteUser = createAsyncThunk("position/deleteUser", async (props) => {
  const { id } = props;
  return await api.deleteById(`${ROUTE.USER}/${id}`).then((res) => res.data);
});

const slice = createSlice({
  name: SLICE.USER,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.entries = action.payload.data;
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.entries.push(action.payload.data);
    });
  },
});

const { reducer } = slice;
export { fetchUser, deleteUser };
export default reducer;
