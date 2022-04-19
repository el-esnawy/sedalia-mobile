import { createSlice } from "@reduxjs/toolkit";
import { checkCredentials, userLogin } from "../asyncThunk/userThunk";

import AsyncStorage from "@react-native-async-storage/async-storage";

const userInitialState = {
  token: "",
  loading: false,
  error: false,
  errorMessage: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: userInitialState,
  reducers: {
    logoutUser: (state, action) => {
      AsyncStorage.clear();
      return { role: "", token: "", loading: false, Ref: null, error: false, errorMessage: "" };
    },
  },
  extraReducers: {
    [userLogin.fulfilled]: (state, action) => {
      AsyncStorage.setItem("token", action.payload.jwt);
      return { loading: false, error: false, errorMessage: "", token: action.payload.jwt };
    },
    [checkCredentials.fulfilled]: (state, action) => {
      return { loading: false, error: false, errorMessage: "", token: action.payload.jwt };
    },
    [checkCredentials.pending]: (state, action) => {
      return { ...state, loading: true, error: false, errorMessage: "" };
    },
    [userLogin.pending]: (state, action) => {
      return { ...state, loading: true, error: false, errorMessage: "" };
    },
    [userLogin.rejected]: (state, action) => {
      const [errorMessages] = action.payload;
      const { messages } = errorMessages;
      return { ...state, loading: false, error: true, errorMessage: messages[0].message };
    },
  },
});
export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
