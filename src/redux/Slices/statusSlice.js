import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  sidebarToggle: false,
  offCanvasShow: false,
  viewCompany: false,
};

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
    openViewCompany: (state) => {
      state.viewCompany = true;
    },
    closeViewCompany: (state) => {
      state.viewCompany = false;
    },
  },
});

export const {
  toggleSideBar,
  closeOffcanvas,
  openOffcanvas,
  openViewCompany,
  closeViewCompany,
} = StatusSlice.actions;
export default StatusSlice.reducer;
