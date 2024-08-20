import { useState } from "react";
import { CalendarEventBox, CalendarModal, Navbar } from "../";
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
      name: "Sebas",
    },
  },
];


export const CalendarPage = () => {

  const [lastView, setLastView ] = useState(localStorage.getItem('lastView') || 'month')


  const eventStyleGetter = (event, start, end, isSelected) => {
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


  const onDoubleClick = (e)=>{
    console.log({doubleClick:e})
  }

  const onSelect= (e)=>{
    console.log({click:e})
  }

  const onViewChanged= (e)=>{
    localStorage.setItem('lastView', e)

    console.log({viewChanged:e})
  }




  return (
    <>
      <Navbar />
      <Calendar
        culture="es-ES"
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 85px)" }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{event: CalendarEventBox}}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
      <CalendarModal />
    </>
  );
};
