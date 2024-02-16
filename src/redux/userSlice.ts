import { UserState } from "@/types/UserTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserState = {
  member_id: "",
  email: "",
  nickname: "",
  job: "",
  image: "",
  description: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<UserState>) => {
      // 사용자 로그인 시 상태 업데이트
      return { ...state, ...action.payload };
    },
    logoutUser: () => {
      // 사용자 로그아웃 시 상태 초기화
      return initialState;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
