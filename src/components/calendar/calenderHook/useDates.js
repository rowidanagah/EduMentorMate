import { useEffect, useState } from 'react'

export default function UseDates( events, latestMonth) {
  const [monthName, setMonthName] = useState('');
  const [days, setDays] = useState([]);

  const checkEvent = date => events.find(e => e.date === date);

  useEffect(() => {
    calendarFunction()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events, latestMonth]);

  const calendarFunction = () => {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date();

    if (latestMonth !== 0) {
      date.setMonth(new Date().getMonth() + latestMonth);
    }

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });

    setMonthName(`${date.toLocaleDateString('en-us', { month: 'long' })} ${year}`);
    const prevMonthDay = weekdays.indexOf(dateString.split(', ')[0]);

    const daysArray = [];

    for (let i = 1; i <= prevMonthDay + daysInMonth; i++) {
      const dayString = `${month + 1}/${i - prevMonthDay}/${year}`;

      if (i > prevMonthDay) {
        daysArray.push({
          value: i - prevMonthDay,
          event: checkEvent(dayString),
          isCurrentDay: i - prevMonthDay === day && latestMonth === 0,
          date: dayString,
        });
      } else {
        daysArray.push({
          value: 'previousMonth',
          event: null,
          isCurrentDay: false,
          date: '',
        });
      }
    }

    setDays(daysArray);
  }

  return {
  days,
  monthName,
}
}
