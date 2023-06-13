import CalendarBody from "./CalendarBody";
import "./calendar.css";
import CalendarHead from "./CalendarHead";
import { useState } from "react";
import dayjs from "dayjs";
import weekdayPlugin from "dayjs/plugin/weekday";

// location setting "Poland";
dayjs().locale("pl");
dayjs.extend(weekdayPlugin);

const defaultDate = dayjs();

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(defaultDate);

  function dateUpdater(date) {
    setCurrentDate(date);
  }
  return (
    <div className="calendar_container">
      <div className="calendar_header">Calendar Header</div>
      <div className="calendar_body">
        <CalendarHead
          currentDate={currentDate}
          dateUpdater={dateUpdater}
          defaultDate={defaultDate}
        />
        <CalendarBody currentDate={currentDate} defaultDate={defaultDate} />
      </div>
    </div>
  );
};

export default Calendar;
