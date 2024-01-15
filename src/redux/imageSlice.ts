import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImageState {
  imageURL: string[] | null;
  fileName: string[] | null;
}

const initialState: ImageState = {
  imageURL: null,
  fileName: null,
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
  },
});

export const { setImageURL, setFileName } = imageSlice.actions;
export const selectImageURL = (state: RootState) => state.image.imageURL;
export const selectFileName = (state: RootState) => state.image.fileName;
export default imageSlice.reducer;
