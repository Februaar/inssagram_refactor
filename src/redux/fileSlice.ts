import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FileState {
  selectedFile: File | undefined;
}

const initialState: FileState = {
  selectedFile: undefined,
};

const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    setSelectedFile: (state, action: PayloadAction<File | undefined>) => {
      state.selectedFile = action.payload;
    },

    clearSelectedFile: (state) => {
      state.selectedFile = undefined;
    },
  },
});

export const { setSelectedFile, clearSelectedFile } = fileSlice.actions;
export default fileSlice.reducer;
