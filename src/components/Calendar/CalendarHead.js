// add local based on Poland

const CalendarHead = ({ currentDate, dateUpdater, defaultDate }) => {
  const changeDateHandler = (num) => {
    if (num === "-") {
      const preMonth = currentDate.subtract(1, "month");
      dateUpdater(preMonth);
    } else if (num === "+") {
      const nextMonth = currentDate.add(1, "month");
      dateUpdater(nextMonth);
    } else if (num === "default") {
      const returnToDefault = defaultDate;
      dateUpdater(returnToDefault);
    }
  };

  return (
    <>
      <div className="calendar_date_change_control">
        <div className="previousMonth">
          <button onClick={() => changeDateHandler("-")}>&#60;</button>
        </div>
        <div className="currentMonth">{currentDate.format("MMMM YYYY")}</div>
        <div className="nextMonth" name="Next month">
          <button onClick={() => changeDateHandler("+")}>&#62;</button>
        </div>
        {currentDate.month() !== defaultDate.month() ? (
          <div className="returToCurrentMonth">
            <button onClick={() => changeDateHandler("default")}>
              &#8635;
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default CalendarHead;
