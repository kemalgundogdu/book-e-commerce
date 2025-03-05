import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// api
import { login, getCurrentUser, logout, allUsers } from "../api/userApi";

// all users thunk
export const allUsersAsync = createAsyncThunk(
  "users/allUsers",
  async (_, { rejectWithValue }) => {
    try {
      const users = await allUsers();
      return users;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Not authorized");
    }
  }
);

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
    users: [], // Tüm kullanıcılar için yeni alan
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
      })
      .addCase(allUsersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(allUsersAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(allUsersAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const selectUser = (state) => state.auth?.user || null;
export const selectUsers = (state) => state.auth?.users || [];
export const selectStatus = (state) => state.auth?.status || "idle";
