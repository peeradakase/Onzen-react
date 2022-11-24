function BookingHistoryItems() {

  return (
    <div className="m-l-30 m-r-30">

      <div className="table-responsive">
        <table className="table align-middle">
          <tbody>

            <tr>
              <th><span>Name</span></th>
              <th><span>Phone number</span></th>
              <th><span>Onsen names</span></th>
              <th><span>Appointment Date</span></th>
              <th><span>Pools</span></th>
              <th><span>Adults</span></th>
              <th><span>Children</span></th>
              <th><span>Status</span></th>
              <th><span>Amount</span></th>
            </tr>

            <tr>
              <td><span>Akiko</span></td>
              <td><span>3636-9866</span></td>
              <td><span>Osaka Onsen</span></td>
              <td><span>13 March 2022 | 10AM - 1PM</span></td>
              <td><span>1</span></td>
              <td><span>3</span></td>
              <td><span>1</span></td>
              <td><span>paid</span></td>
              <td><span>1,590 HKD</span></td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default BookingHistoryItems;
