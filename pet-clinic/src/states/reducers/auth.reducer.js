import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "@/services";
import { ROUTE, SLICE } from "@/constants";

const initialState = {
  user: {
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    DateCreated: "",
    DateUpdated: "",
  },
  animals: [],
  token: "",
};

const authUser = createAsyncThunk("auth/authUser", async (props) => {
  return await api
    .post(`${ROUTE.USER}/${ROUTE.AUTH}`, props.body)
    .then((res) => res.data);
});

const slice = createSlice({
  name: SLICE.AUTH,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authUser.fulfilled, (state, action) => {
      const { status, data, token } = action.payload;
      console.log(action.payload);
      if (status == "success") {
        state.user = data[0];
        state.user.animals = data[0].animals ?? {};
        state.user.DateCreated = data[0].DateCreated;
        state.user.DateUpdated = data[0].DateUpdated;
        state.token = token;
      }
    });
  },
});

const { reducer } = slice;
export { authUser };
export default reducer;
