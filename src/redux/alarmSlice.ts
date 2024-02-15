import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotificationData } from "@/types/NotificationTypes";

interface AlarmState {
  alarms: NotificationData[];
}

const initialState: AlarmState = {
  alarms: [],
};

export const alarmSlice = createSlice({
  name: "alarm",
  initialState,
  reducers: {
    setAlarms: (state, action: PayloadAction<NotificationData[]>) => {
      state.alarms = action.payload;
    },
    removeAlarm: (state, action: PayloadAction<string>) => {
      state.alarms = state.alarms.filter(
        (alarm) => alarm.id !== action.payload
      );
    },
  },
});

export const { setAlarms, removeAlarm } = alarmSlice.actions;
export default alarmSlice.reducer;
