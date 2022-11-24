import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { bookingTimeSlot } from '../data/constant.js';

const BookingPage = () => {
  const [bookingData, setBookingDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState(bookingTimeSlot);

  const onSlotClick = (index) => {
    const newTimeSlot = timeSlot.slice();
    const updateTimeSlot = newTimeSlot.map(slot => {
      return {
        ...slot,
        isActive: false
      }
    })
    updateTimeSlot[index].isActive = true;
    setTimeSlot(updateTimeSlot);
  }
  return (
      <div>
        <h1 className="text-center">Booking Page</h1>
        <div className="row">
          {/* Calendar for choosing date */}
          <div className="col-md-6">
            <Calendar value={bookingData} onChange={setBookingDate} />
          </div>

          {/* time slot */}
          <div className="col-md-6">
            <ul>
              {timeSlot.map((slot, index) => {
                return (
                  <li key={`slot-${index}`}>
                    <button
                      className={`btn btn-${slot.isActive ? 'danger':'light'}`}
                      onClick={() => {
                        onSlotClick(index)
                      }}
                    >
                      {slot.label}
                    </button>
                  </li>
                )
              })}
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default BookingPage;
