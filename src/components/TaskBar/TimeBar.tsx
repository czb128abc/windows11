import { useInterval } from 'ahooks';
import dayjs from 'dayjs';
import { useState } from 'react';

function TimeBar() {
  const [date, setDate] = useState(dayjs(new Date()));

  useInterval(() => {
    setDate(dayjs(new Date()));
  }, 1000);

  return (
    <div className="bar-status time-bar">
      <div className="date--time-clock">{date.format('HH:mm:ss')}</div>
      <div className="date--time-date">{date.format('YYYY/MM/DD')}</div>
    </div>
  );
}

export default TimeBar;
