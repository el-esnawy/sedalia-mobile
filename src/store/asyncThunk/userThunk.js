import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const userLogin = createAsyncThunk("users/userLogin", async ({ identifier, password }, thunkAPI) => {
  try {
    const result = await axios.post("/auth/local", {
      identifier,
      password,
    });
    return result.data;
  } catch (error) {
    // console.log(error.response);

    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const checkCredentials = createAsyncThunk("users/checkCredentials", async (_, thunkAPI) => {
  try {
    const token = await AsyncStorage.getItem("token");
    return { jwt: token };
  } catch (error) {
    // console.log(error.response);

    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});
