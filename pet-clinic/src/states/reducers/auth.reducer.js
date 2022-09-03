import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../services";
import { ROUTE, SLICE } from "../../constants";

const initialState = {
  user: {
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    DateCreated: new Date(),
    DateUpdated: new Date(),
  },
  token: "",
};

export const authUser = createAsyncThunk("auth/authUser", async (props) => {
  return await api
    .post(`${ROUTE.USER}/${ROUTE.AUTH}`, props.body)
    .then((res) => res.data);
});

export const authSlice = createSlice({
  name: SLICE.AUTH,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authUser.fulfilled, (state, action) => {
      const { status, data, token } = action.payload;
      if (status == "success") {
        state.user = data[0];
        state.user.DateCreated = new Date(data[0].DateCreated);
        state.user.DateUpdated = new Date(data[0].DateUpdated);
        state.token = token;
      }
    });
  },
});

export default authSlice.reducer;
