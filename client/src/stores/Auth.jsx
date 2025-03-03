import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// api
import { login, getCurrentUser } from "../api/userApi";

// login thunk
export const loginAsync = createAsyncThunk("auth/login", async (user, { rejectWithValue }) => {
  try {
    await login(user);
    const userData = await getCurrentUser(); 
    return userData;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Not authorized");
  }
});

// fetch user thunk
export const fetchUser = createAsyncThunk("auth/fetchUser", async (_, { rejectWithValue }) => {
  try {
    const userData = await getCurrentUser(); 
    return userData;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Not authorized");
  }
});

export const userSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null; // Çıkış yapıldığında kullanıcıyı sıfırla
    },
  },
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
      });
  },
});

export const { logout } = userSlice.actions;
export const selectUser = (state) => state.auth?.user || null;
export const selectStatus = (state) => state.auth?.status;