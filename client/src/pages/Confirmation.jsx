import BookingHistoryItems from "../components/BookingHistoryItems";

function ConfirmationPage() {

  return (
    <div>
      <h1 className="text-center m-t-50 ">Booking Confirmed</h1>
      <h6 className="text-center m-t-30 ">We are pleased to inform you that you reservation request has been received and confirmed.</h6>
      <h3 className="m-t-30 m-l-30">Booking Details</h3>
      <div >
        <BookingHistoryItems />
      </div>
    </div>

  )
}
export default ConfirmationPage;
