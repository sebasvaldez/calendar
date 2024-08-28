import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onSetActiveEvent } from "../store";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent =  (calendarEvent) => {
    if (calendarEvent._id) {
      //update  event
    } else {
      //create new event
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  return {
    //properties
    events,
    activeEvent,

    //methods
    setActiveEvent,
    startSavingEvent,
  };
};
