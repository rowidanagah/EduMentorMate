import React,{useState, useEffect} from 'react'
import CalendarHeader from '../components/calendar/calendarHeader/calendarHeader'
import SingleDay from '../components/calendar/calendarSingleDay/singleDay'
import UseDates from '../components/calendar/calenderHook/useDates'
import EventCreateModal from '../components/EventModal/createEvent/eventCreateModal'
import EventDetail from '../components/EventModal/EventDetail/eventDetail'
// import '../scss/App.scss'
import axios from 'axios';
import AboutSession from '../components/calendar/AboutSession'
import { useParams } from 'react-router-dom'

export default function FullCalendar() {
    const [latestMonth, setLatestMonth] = useState(0);
    const [clickedDate, setClickedDate] = useState();
    const [events, setEvents] = useState([]);
    const {sessionid } = useParams()




  const checkEvent = date => events.find(e => e.date === date);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);


  useEffect(()=>{
    const token = localStorage.getItem('token');
    axios.get(`http://localhost:8000/roomsession/${sessionid}`,{ headers: {
        'Content-Type': 'application/json',

        'Authorization': `Token ${token}`, 
      }},).then( async response=>{

        console.log("respones all",response.data)
        console.log("respones data",response.data.available_dates)
        const availablesDates = response.data.available_dates.map(ob=>{
            // date convert 
            const dateObj = new Date(ob.session_date);
           return {
            id:ob.id,
            title:response.data.title,
            // description:response.
            date:  `${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()}`,
            user:"null",
            time:response.data.deruration,
            reserved:ob.reserved,
            mentorImg:response.data.mentor.user_profile,
            mintor:response.data.mentor.name,
             price: ob.price,
             description: response.data.description
           }
            
        })
        setEvents(availablesDates)
        console.log(availablesDates,"is")
    
      })
  },[])

  const { days, monthName } = UseDates(events, latestMonth);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent])
    setClickedDate(null);
  }

  const updateEvent = (event) => {
    const updateEventData = events.map(item=>{
        if(item.date === clickedDate){
            return {
                ...item, title:event.title, date:clickedDate, description:event.description
            }
        }
        return item
    })
    setEvents(updateEventData)
    setClickedDate(null)
  }

  const deleteEvent = () => {
    setEvents(events.filter(event => event.date !== clickedDate));
    setClickedDate(null);
  }

  const closeModal = () => {
    setClickedDate(null)
  }

  console.log("Tasks", events)


  return (
    <div className="full-calendar-section" style={{width: '85%',
    borderRadius: '10px',
    borderColor: '#45708f',
    marginTop: '11rem',
    marginLeft: '7rem'}}>
         <AboutSession></AboutSession>
        <div className="full-calendar-contents">
            <div className="calendar-header">
                <CalendarHeader
                    monthName={monthName}
                    latestMonth={latestMonth}
                    setLatestMonth={setLatestMonth}
                />
            </div>
            <div className="calendar-week-days">
               <div className="calendar-day-name" style={{borderRadius: '20px',
backgroundColor: '#61c9a66b'}}>Sun</div>
               <div className="calendar-day-name" style={{borderRadius: '20px',
backgroundColor: '#61c9a66b'}}>Mon</div>
               <div className="calendar-day-name" style={{borderRadius: '20px',
backgroundColor: '#61c9a66b'}}>Tue</div>
               <div className="calendar-day-name" style={{borderRadius: '20px',
backgroundColor: '#61c9a66b'}}>Wed</div>
               <div className="calendar-day-name" style={{borderRadius: '20px',
backgroundColor: '#61c9a66b'}}>Thu</div>
               <div className="calendar-day-name"style={{borderRadius: '20px',
backgroundColor: '#61c9a66b'}}>Fri</div>
               <div className="calendar-day-name" style={{borderRadius: '20px',
backgroundColor: '#61c9a66b'}}>Sat</div>
            </div>
            <div className="main-calendar">
                {
                    days.map((day, key)=>(
                        <SingleDay
                            key={key}
                            day={day}
                            onClick={()=>{
                                if(day.value !== 'previousMonth'){
                                    setClickedDate(day.date);
                                } 
                            }}
                        />
                    ))
                }
            </div>
        </div>
        {
            // clickedDate &&  !checkEvent(clickedDate) &&
            // <EventCreateModal 
            //     closeModal={closeModal}
            //     addEvent={addEvent}
            //     clickedDate={clickedDate}
            // />
        }
        {
           clickedDate && checkEvent(clickedDate)&&
           <EventDetail
               checkEvent={checkEvent}
               clickedDate={clickedDate}
               closeModal={closeModal}
               updateEvent={updateEvent}
              deleteEvent={deleteEvent}
           />
        }
    </div>
  )
}



