import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api.service";
import CONST from "../../constants/index";

const initialState = {
  user: {
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
  },
  token: "",
};

export const authUser = createAsyncThunk("auth/authUser", async (props) => {
  return await api
    .post(`${CONST.ROUTE.USER}/${CONST.ROUTE.AUTH}`, props.body)
    .then((res) => res.data);
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authUser.fulfilled, (state, action) => {
      const { status, data, token } = action.payload;
      if (status == "success") {
        state.user = data[0];
        state.token = token;
      }
    });
  },
});

export default authSlice.reducer;
