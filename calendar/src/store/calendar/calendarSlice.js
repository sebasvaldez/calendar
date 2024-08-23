import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const temEvent = {
  _id: new Date().getTime(),
  title: "Mi cumpleaños",
  notes: "No invitar a nadie, tampoco quiero visitas, y no hay pastel",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#fafafa",
  user: {
    _id: "123",
    name: "Sebas",
  },
};

export const calendarSlice = createSlice({
  name: "calendar",

  initialState: {
    events: [temEvent],
    activeEvent: null,
  },

  reducers: {
    onSetActiveEvent: (state, actions) => {
      state.activeEvent = actions.payload;
    },
  },
});

export const { onSetActiveEvent } = calendarSlice.actions;
