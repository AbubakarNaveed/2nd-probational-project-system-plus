import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = { sidebarToggle: false };

const StatusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.sidebarToggle = !state.sidebarToggle;
    },
  },
});

export const { toggleSideBar } = StatusSlice.actions;
export default StatusSlice.reducer;
