import React, {useState} from 'react'
import {GrUpdate} from 'react-icons/gr'
import {FiDelete} from 'react-icons/fi'


export default function ViewEventModal(props) {
  
  const { updateEvent, checkEvent, clickedDate, closeModal} = props;
  const eventData = checkEvent(clickedDate)
  const [updateEventData, setUpdateEventData] = useState({
    title: eventData.title,
    description:eventData.description,
  })
  const [error, setError] = useState(false)

  const AddEvent = () => {
    if(updateEventData.title){
      updateEvent(updateEventData)
      setError(false)
    }else{
      setError(true)
    }
  }

  const inputHandler = (e) => {
    setUpdateEventData({
      ...updateEventData,
      [e.target.name]:e.target.value
    })
  }

  return (
    <div className='event-box'>
    <div className='event-box-modal'>
    <div className="event-box-title">
      <div className="box-title">
        <h2>Edit Event</h2>
      </div>
    </div>
    <div className="event-input-section">
      <label>Event Title</label>
      <input className={error ? 'error' : ''} type="text" onChange={inputHandler} name='title' value={updateEventData.title} placeholder='Add Title'/>
    </div>
    <div className="event-input-section">
      <label>Event Description</label>
       <textarea name='description' value={updateEventData.description} onChange={inputHandler} rows="3" placeholder='Add description'/>
    </div>
    <div className="button-areas">
      {/* <button className='main-btn btn-cornflower' onClick={deleteEvent}><AiFillDelete/></button> */}
      <button className='main-btn btn-cornflower' onClick={AddEvent}><GrUpdate/></button>
      <button className='main-btn btn-cornflower' onClick={closeModal}><FiDelete/></button>
    </div>
    </div>
    <div className="modal-backdrop" onClick={closeModal}></div>
  </div>
  )
}
