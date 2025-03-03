import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// api
import { login, getCurrentUser, logout } from "../api/userApi";

// login thunk
export const loginAsync = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      await login(user);
      const userData = await getCurrentUser();
      return userData;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Not authorized");
    }
  }
);

// fetch user thunk
export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const userData = await getCurrentUser();
      return userData;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Not authorized");
    }
  }
);

// logout thunk
export const logoutAsync = createAsyncThunk("auth/logout", async () => {
  await logout();
});

export const userSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(logoutAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.status = "idle";
        state.user = null;
        state.error = null;
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const selectUser = (state) => state.auth?.user || null;
export const selectStatus = (state) => state.auth?.status || "idle";
