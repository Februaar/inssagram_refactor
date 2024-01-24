import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  profileURL: string | null;
  fileName: string | null;
}

const initialState: ProfileState = {
  profileURL: null,
  fileName: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileURL: (state, action: PayloadAction<string>) => {
      state.profileURL = action.payload;
    },
    setFileName: (state, action: PayloadAction<string>) => {
      state.fileName = action.payload;
    },
  },
});

export const { setProfileURL, setFileName } = profileSlice.actions;
export const selectprofileURL = (state: RootState) => state.profile.profileURL;
export const selectFileName = (state: RootState) => state.profile.fileName;
export default profileSlice.reducer;
