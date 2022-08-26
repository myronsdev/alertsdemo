import { createSlice } from "@reduxjs/toolkit";

export const alertsSlice = createSlice({
  name: "alerts",
  initialState: {
    activeAlerts: [],
  },
  reducers: {
    add: (state, action) => {
      // if id already exist or is empty, generate a new one
      action.payload.id = validateID(
        action.payload.alertType,
        action.payload.id,
        state.activeAlerts
      );
      state.activeAlerts = [...state.activeAlerts, action.payload];
    },
    setAlertRemoval: (state, action) => {
      state.activeAlerts = state.activeAlerts.filter(
        (alert) => alert.id !== action.payload
      );
    },
  },
});

export function validateID(alertType, id, existingAlerts) {
  const idExist = existingAlerts.some((alert) => alert.id === id);
  return idExist || id === "" ? uniqueId(alertType) : id;
}

export const uniqueId = (prefix) =>
  prefix + Math.random().toString(16).slice(-7);

export const { add, setAlertRemoval } = alertsSlice.actions;

export default alertsSlice.reducer;
