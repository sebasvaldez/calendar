import { Navbar } from "../";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { addHours } from "date-fns";
import { localizer, getMessagesES } from "../../helpers";

const events = [
  {
    title: "Mi evento de cumpleaños",
    notes: "No invitar a nadie",
    start: new Date(),
    end: addHours(new Date(), 3),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "sebas",
    },
  },
];

const eventStyleGetter = (event, start, end, isSelected) => {
  console.log({ event, start, end, isSelected });
  const style = {
    backgroundColor: "#347cf7",
    borderRadius: "0px",
    opacity: 0.8,
    color: "white",
  };
  return {
    style,
  };
};

export const CalendarPage = () => {
  return (
    <>
      <Navbar />
      <Calendar
        culture="es-ES"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 85px)" }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
      />
    </>
  );
};
