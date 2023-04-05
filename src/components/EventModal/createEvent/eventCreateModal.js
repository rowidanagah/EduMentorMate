import React, { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {FiDelete} from 'react-icons/fi'

export default function EventCreateModal(props) {

  const {addEvent, closeModal, clickedDate} = props;
  const [eventData, setEventData] = useState({
    title:'',
    description:'',
    date:clickedDate,
  })
  const [error, setError] = useState(false)

  const AddEvent = () => {
    if(eventData.title){
      addEvent(eventData)
      setError(false)
    }else{
      setError(true)
    }
  }

  const inputHandler = (e) => {
     setEventData({
       ...eventData,
       [e.target.name]: e.target.value
     })
  }

 
  return (
    <div className='event-box'>
      <div className='event-box-modal'>
      <div className="event-box-title">
        <div className="box-title">
          <h2>Add Event</h2>
        </div>
      </div>
      <div className="event-input-section">
        <label>Event Title</label>
        <input className={error ? 'error' : ''} type="text" onChange={inputHandler} name='title' value={eventData.title} placeholder='Add Title'/>
      </div>
      <div className="event-input-section">
        <label>Event Description</label>
         <textarea name='description' value={eventData.description} onChange={inputHandler} rows="3" placeholder='Add description'></textarea>
      </div>
      <div className="button-areas">
        <button className='main-btn btn-cornflower' onClick={AddEvent}><AiOutlinePlus/></button>
        <button className='main-btn btn-cornflower' onClick={closeModal}><FiDelete/></button>
      </div>
      </div>
      <div className="modal-backdrop" onClick={closeModal}></div>
    </div>
  )
}
