import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImageState {
  imageURL: string[] | null;
  fileName: string[] | null;
  files: File[] | null;
}

const initialState: ImageState = {
  imageURL: null,
  fileName: null,
  files: null,
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImageURL: (state, action: PayloadAction<string[]>) => {
      state.imageURL = action.payload;
    },
    setFileName: (state, action: PayloadAction<string[]>) => {
      state.fileName = action.payload;
    },
    setFiles: (state, action: PayloadAction<File[]>) => {
      state.files = action.payload;
    },
  },
});

export const { setImageURL, setFileName } = imageSlice.actions;
export const selectImageURL = (state: RootState) => state.image.imageURL;
export const selectFileName = (state: RootState) => state.image.fileName;
export const selectFiles = (state: RootState) => state.image.files;
export default imageSlice.reducer;
