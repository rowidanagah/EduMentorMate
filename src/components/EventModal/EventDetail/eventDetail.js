import React, { useState } from 'react'
import '../../../scss/App.css'
import ViewEventModal from '../viewEvent/viewEventModal';
import axios from 'axios';

export default function EventDetail(props) {

    const {checkEvent, clickedDate, closeModal, updateEvent, deleteEvent} = props;
    const eventData = checkEvent(clickedDate)
    const [isAppear, setIsAppear] = useState(false);

    const editEventDetails = () => {
        closeModal()
        setIsAppear(true)
        console.log("clicked ....");
    }


    const bookHandler=()=>{
      console.log(eventData.id,"event ____________________________id",eventData)
        axios.patch(`http://localhost:8000/roomsession/session-date/${eventData.id}`,{ "reserved": true},
        { headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token 3588a26cc4ed3efeeab7bf5b975c21a458dab39c', 
          }}
        ).then((response)=>{

               console.log(response)

        })
        .catch(error=>{

            console.log("fetch single date error",error.response.data)
        }

        )
        console.log("handle book,",eventData.id)

           
        eventData.reserved=true
        closeModal()

    }

  console.log("edit", isAppear);
  return (
    <div className='event-detail-container'>
      <div className="event-contents">
         <div className="event-detail-box">
         {/* {clickedDate.eventData} */}
         <div  style={{fontSize: '2rem',
textAlign: 'center',
color: '#41a7e3',
margin: '10px 20px 0px 48px'}} >about session </div>
    
<div>  <b>title : </b>{eventData.title}</div>         
<div> <b>description : </b>here is description about the session what  you will learn and what to success </div>
<div><b>mintor : {eventData.mintor}</b></div> 
<img class="avatar" src={eventData.mentorImg} alt="mentor image "></img>
              { ! eventData.reserved &&  <button className='main-btn btn-cornflower' onClick={bookHandler} style={{margin: '10px 10px 10px 176px'}}>Book</button>}
         

{eventData.reserved &&
        <div style={{color: '#e59529',
marginTop: '20px',
fontSize: '28px'}}> sorry but this session already taken you can take another  </div>
}
         </div>
      </div>
    <div className="modal-backdrop" onClick={closeModal}></div>
    {
        isAppear && <ViewEventModal
            checkEvent={checkEvent}
            clickedDate={clickedDate}
            closeModal={closeModal}
            updateEvent={updateEvent}
        />
    }
    </div>
  )
}
