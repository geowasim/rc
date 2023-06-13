import React from "react";

const CalendarDays = (props) => {
  const daysArray = [];
  for (let index = 0; index < 7; index++) {
    daysArray.push(props.defaultDate.weekday(index).format("ddd"));
  }
  return (
    <>
      {daysArray.length > 0 &&
        daysArray.map((day, idx) => (
          <div key={idx} className="tr">
            <span className="th">
              <a href="#ref">{day}</a>
            </span>
          </div>
        ))}
    </>
  );
};

export default CalendarDays;
