import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { bookingTimeSlot } from '../data/constant.js';
import styles from './Booking.module.css';

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
    <div className={`${styles.container}`}>
      <h1 className="text-center m-b-60 m-t-30">Booking Page</h1>
        <div className="row">
          {/* Calendar for choosing date */}

          <div className="col-md-6">
          <div className="item-center">
          <Calendar minDate={new Date()} value={bookingData} onChange={setBookingDate} />
          </div>
          </div>


          {/* time slot */}
        <div className="col-md-6 m-b-10">
          <div className={`${styles.listStyleNone} row`}>
              {timeSlot.map((slot, index) => {
                return (
                  <div className="col-4 m-b-20" key={`slot-${index}`}>
                    <button
                      className={`m-l-15 btn btn-${slot.isActive ? 'danger' : 'light'} ${styles.timeSlotButton}`}
                      onClick={() => {
                        onSlotClick(index)
                      }}
                    >
                      {slot.label}
                    </button>
                  </div>
                )
              })}
              <li></li>
            </div>
          </div>
        </div>
      </div>
    )
}

export default BookingPage;
