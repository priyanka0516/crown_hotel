import React, { useState } from "react";

export default function Bookingform() {
    const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');
  const [numOfRooms, setNumOfRooms] = useState('');
  const [promoCode, setPromoCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission or further actions here
    console.log('Form submitted!');
  };
    return (
   
        <form className="checkin-form" onSubmit={handleSubmit}>
            <div className="container">
                <div className="row">
              
      <div className="col-md-3">
        
          <input
            type="text"
            id="checkIn"
                            name="checkIn"
                            required
                            value={checkIn}
                            placeholder="Check-in"
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
         <div className="col-md-3">
    
          <input
                            type="text"
                              required
                            id="checkOut"
                            placeholder="Check-out"
            name="checkOut"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
        <div className="col-md-3">
   
          <input
                            type="number"
                              required
            id="adults"
                            name="adults"
                            placeholder="Adult"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
          />
        </div>
         <div className="col-md-3">
       
          <input
                            type="number"
                              required
            id="children"
                            name="children"
                            placeholder="Children"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
          />
        </div>
      <div className="col-md-3">
        
          <input
            type="number"
                            id="numOfRooms"
                              required
                            name="numOfRooms"
                            placeholder="Rooms"
            value={numOfRooms}
            onChange={(e) => setNumOfRooms(e.target.value)}
          />
        </div>
        <div className="col-md-3">
        
          <input
            type="text"
            id="promoCode"
            name="promoCode"
            placeholder="promoCode"
                            value={promoCode}
                              required
            onChange={(e) => setPromoCode(e.target.value)}
          />
                    </div>
                    <div className="col-md-3">
                    <button type="submit" className="book-button">Book Now</button>
                          
                    </div>      
                     <div className="col-md-3"></div>
                </div>
            </div>
      </form>
  
  )
}
