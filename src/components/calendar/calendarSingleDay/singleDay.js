import React from 'react'

export default function SingleDay(props) {
    const {day, onClick} = props

    const singleCalenderDay =`singleday ${day.value === 'previousMonth' ? 'previousMonth': ''} ${day.isCurrentDay ? 'currentDay': ''}`
  return (
    <div className={singleCalenderDay} onClick={onClick}>
        <div className="single-day-contents">
          <div className="single-day-date">
            {day.value === 'previousMonth' ? " " : day.value}

          </div>
          {/* {day.event && <div className='event'>{day.event.time}</div>} */}
          {day.event && <div className={day.event.reserved? 'reserved' :'event'} >{day.event.title} 

               <div style={{color: '#329d4e',fontSize:'1rem'}}> 
                {day.event.mintor}</div>

          </div>}
        </div>
    </div>
  )
}
