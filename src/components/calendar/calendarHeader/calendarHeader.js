import React from 'react'

export default function CalendarHeader(props) {
  const {monthName, latestMonth, setLatestMonth} = props

  const onPrev = () =>{
    setLatestMonth(latestMonth - 1)
  }

  const onNext = () => {
    setLatestMonth(latestMonth + 1)
  }
  return (
    <div className="calendar-header-contents">
        <div className="previous-button-section">
           <button className="main-btn btn-cornflower" onClick={onPrev}>
               Prev
           </button>
        </div>
        <div className="month-title-section">
              <h3>{monthName}</h3>
        </div>
        <div className="next-button-section">
           <button className="main-btn btn-cornflower" onClick={onNext}>
               Next
           </button>
        </div>
    </div>
  )
}
