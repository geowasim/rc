// import moment from "moment/moment";
import { useState } from "react";
import { generateDate } from "../../utils/arrayOfDate";
import CalendarDays from "./CalendarDays";
import { FAKE_ARR_EVENTS } from "../../data/day-month";
import dayjs from "dayjs";

const CalendarBody = ({ currentDate, defaultDate }) => {
  let day = currentDate.date();
  let month = currentDate.month();
  let year = currentDate.year();
  let totalDays = generateDate(month, year);

  function compareTwoDates(first, second) {
    if (first & second)
      return (
        first.date() === second.date() &&
        first.month() === second.month() &&
        first.year() === second.year()
      );
  }

  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [calendarEvent, setCalendarEvent] = useState(null);
  const [showEvent, setShowEvent] = useState(false);

  const selectDateHandle = (date) => {
    console.log(date.date(), date.month(), date.year());
    setSelectedDate(date);
  };
  const selectCalendarEventHandler = (selectedOne) => {
    console.log(selectedOne);
    setCalendarEvent(selectedOne);
  };

  return (
    <>
      <div role="table" className="table">
        <div className="thead">
          <CalendarDays defaultDate={defaultDate} />
        </div>
        <div className="tbody">
          {totalDays.map(({ isCurrentMonth, isToday, date }, idx) => {
            return (
              <ul
                key={idx}
                className={`${
                  isCurrentMonth ? "currentMonth" : "notCurrentMonth"
                } ${isToday ? "today" : ""} td  ${
                  date.toString() === selectedDate.toString()
                    ? "selectedDay"
                    : ""
                }`}
              >
                <li
                  className={`${
                    date.toString() === selectedDate.toString()
                      ? "selectedDate"
                      : ""
                  }`}
                >
                  <span
                    className="dayDate"
                    onClick={() => selectDateHandle(date)}
                  >
                    {date.date()}
                  </span>
                  {FAKE_ARR_EVENTS.map((eve, idx) => {
                    return (
                      compareTwoDates(eve.date, date) && (
                        <p
                          className="event_block"
                          key={idx}
                          style={{
                            color: eve.color,
                            background: eve.background,
                          }}
                          onClick={() => selectCalendarEventHandler(eve.title)}
                        >
                          {eve.title}
                        </p>
                      )
                    );
                  })}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CalendarBody;
