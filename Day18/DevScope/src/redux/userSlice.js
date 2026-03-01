import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = null;
      state.repos = [];
      state.devScore = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        const username = action.meta.arg;

        state.users[username] = {
          user: null,
          repos: [],
          loading: true,
          error: null,
        };
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        const username = action.meta.arg;
        state.loading = false;
        state.users[username] = {
          user: action.payload.user,
          repos: action.payload.repos,
          loading: false,
          error: null,
        };
        state.repos = action.payload.repos;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        const username = action.meta.arg;

        state.users[username] = {
          user: null,
          repos: [],
          loading: false,
          error: action.error.message,
        };
      });
  },
});

export const fetchUser = createAsyncThunk(
  "profile/fetchUser",
  async (username, { rejectWithValue }) => {
    try {
      const headers = {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
      }
      const normalized = username.trim().toLowerCase()

      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${normalized}`,{headers}),
        fetch(`https://api.github.com/users/${normalized}/repos`,{headers})
      ])

      if (!userRes.ok) {
        throw new Error("User not found")
      }

      if (!reposRes.ok) {
        throw new Error("Failed to fetch repos")
      }

      const user = await userRes.json()
      const repos = await reposRes.json()

      return { user, repos, username: normalized }

    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const { clearUser } = userSlice.actions;

export default userSlice.reducer;
