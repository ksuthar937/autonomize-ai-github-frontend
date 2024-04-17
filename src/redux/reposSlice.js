import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  repos: [],
  isRepoDetail: false,
  repoDetailId: "",
};

const reposSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
    getAllRepos(state, action) {
      state.repos = action.payload;
    },
    getRepo(state, action) {
      state.repoDetailId = action.payload;
      state.isRepoDetail = true;
    },
  },
});

export const { getAllRepos, getRepo } = reposSlice.actions;

export default reposSlice.reducer;
