import React, { useState } from 'react'
import '../../../scss/App.css'
import ViewEventModal from '../viewEvent/viewEventModal';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function EventDetail(props) {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [expiryDate, setExpiryDate] = useState(null);

  const handleExpiryDateChange = (date) => {
    // setExpiryDate(date);
    // Check if the date is not null and not in the past
    if (date && date >= new Date()) {
      setExpiryDate(date);
    } else {
      alert('Please select a valid date ');
      setExpiryDate(null);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate card number
    if (!/^\d{16}$/.test(cardNumber)) {
      alert('Invalid card number. Please enter a 16-digit card number.');
      return;
    }

    // Validate security code
    if (!/^\d{3}$/.test(securityCode)) {
      alert('Invalid security code. Please enter a 3-digit security code.');
      return;
    }
    // Check if all fields are filled in
    if (!cardNumber) {
      alert('Please fill in card Number.');
      return;
    }
    if (!cardHolder) {
      alert('Please fill in card Holder');
      return;
    }
    if (!expiryDate) {
      alert('Please fill in expiration Date');
      return;
    }
    if (!securityCode) {
      alert('Please fill in security Code');
      return;
    }
 

    else {
      bookHandler()
    }



  };

    const {checkEvent, clickedDate, closeModal, updateEvent, deleteEvent} = props;
    const eventData = checkEvent(clickedDate)
    const [isAppear, setIsAppear] = useState(false);

    const editEventDetails = () => {
        closeModal()
        setIsAppear(true)
        console.log("clicked ....");
    }

  let getToken = localStorage.getItem("token");
    const bookHandler=()=>{
      console.log(eventData.id,"event ____________________________id",eventData)
        axios.patch(`http://localhost:8000/roomsession/session-date/${eventData.id}`,{ "reserved": true},
        { headers: {
            'Content-Type': 'application/json',
          'Authorization': `Token ${getToken}`, 
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
      
        <div className="m-auto shadow">
          
          <form onSubmit={handleSubmit} className="m-3 p-3">
            <h1 className='text-center'>
              <img src="https://readme-typing-svg.demolab.com?font=Alkatra&weight=600&size=30&duration=2000&pause=1000&color=195874&width=500&lines=Book+Now+" alt="Typing SVG" />


            </h1>
            {/*  */}


            <div>  <b>title : </b>{eventData.title}</div>
            <div> <b>description : </b>{eventData.description} </div>
            <div><b>mintor : {eventData.mintor}</b></div> 
            <div><b>Price : ${eventData.price}</b></div> 

            { ! eventData.reserved ?
            <div>
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number: <img src="https://icon-library.com/images/visa-master-icon/visa-master-icon-29.jpg" style={{height: '4rem'}}></img></label>
                <input
                  type="text"
                  id="cardNumber"
                  className="form-control"
                  value={cardNumber}
                  onChange={(event) => setCardNumber(event.target.value)}

                />
              </div>

              <div className="form-group">
                <label htmlFor="cardHolder">Card Holder:</label>
                <input
                  type="text"
                  id="cardHolder"
                  className="form-control"
                  value={cardHolder}
                  onChange={(event) => setCardHolder(event.target.value)}

                />
              </div>
              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="expiryDate">Expiration date</label>
                  <div className='border border-secondary'>
                    <DatePicker
                      id="expiryDate"
                      name="expiryDate"
                      selected={expiryDate}
                      onChange={handleExpiryDateChange}
                      dateFormat="MM/yyyy"
                      showMonthYearPicker
                    />
                  </div>
                </div>


                <div className="form-group col-md-6">
                  <label htmlFor="securityCode">Security Code:</label>
                  <input
                    type="text"
                    id="securityCode"
                    className="form-control"
                    value={securityCode}
                    onChange={(event) => setSecurityCode(event.target.value)}

                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary">book Now</button>
           </div>
           :
           <div class="alert alert-warning" role="alert"> sorry but this session already taken you can take another </div>
            
            } 
          
          
          </form>
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
