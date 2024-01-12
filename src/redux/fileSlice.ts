import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FileState {
  selectedFiles: File[] | undefined;
  fileNames: string[] | undefined;
}

const initialState: FileState = {
  selectedFiles: undefined,
  fileNames: undefined,
};

const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    setSelectedFiles: (
      state,
      action: PayloadAction<File | File[] | undefined>
    ) => {
      if (action.payload) {
        state.selectedFiles = Array.isArray(action.payload)
          ? action.payload
          : [action.payload];
        state.fileNames = state.selectedFiles.map((file) => file.name);
      } else {
        state.selectedFiles = undefined;
        state.fileNames = undefined;
      }
    },
    clearSelectedFiles: (state) => {
      state.selectedFiles = undefined;
      state.fileNames = undefined;
    },
  },
});

export const { setSelectedFiles, clearSelectedFiles } = fileSlice.actions;
export default fileSlice.reducer;
