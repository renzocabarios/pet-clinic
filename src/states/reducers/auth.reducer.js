import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "@/services";
import { ROUTE, SLICE, EVENT } from "@/constants";

const initialState = {
  user: {
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    type: "",
    DateCreated: "",
    DateUpdated: "",
  },
  animals: [],
  token: "",
};

const authUser = createAsyncThunk(
  `${SLICE.ADOPTION}/${EVENT.AUTH_USER}`,
  async (props) => {
    return await api
      .post(`${ROUTE.USER}/${ROUTE.AUTH}`, props.body)
      .then((res) => res.data);
  }
);

const slice = createSlice({
  name: SLICE.AUTH,
  initialState,
  reducers: {
    logoutUser(state) {
      state.user = {
        _id: "",
        firstName: "",
        lastName: "",
        email: "",
        type: "",
        DateCreated: "",
        DateUpdated: "",
      };
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authUser.fulfilled, (state, action) => {
      const { status, data, token } = action.payload;
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

const { reducer, actions } = slice;
const { logoutUser } = actions;
export { authUser, logoutUser };
export default reducer;
