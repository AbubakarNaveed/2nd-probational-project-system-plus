import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = { sidebarToggle: false, offCanvasShow: false };

const StatusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.sidebarToggle = !state.sidebarToggle;
    },
    closeOffcanvas: (state) => {
      state.offCanvasShow = false;
    },
    openOffcanvas: (state) => {
      state.offCanvasShow = true;
    },
  },
});

export const { toggleSideBar, closeOffcanvas, openOffcanvas } =
  StatusSlice.actions;
export default StatusSlice.reducer;
