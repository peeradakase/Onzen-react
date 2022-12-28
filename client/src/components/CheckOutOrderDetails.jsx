function CheckOutOrderDetails() {

  return (
    <div>
      <div className="m-l-30 m-r-30">
        <h3 className="m-t-50">Saturday 4 March 2023</h3>
        <h3 >Outdoor Onsen 10:00 Am</h3>
      </div>
      <div className="m-l-30 m-r-30">

        <div className="table-responsive">
          <table className="table align-middle">
            <tbody>

              <tr>
                <th><span>Pools</span></th>
                <th><span>Adults</span></th>
                <th><span>Children</span></th>
                <th><span>Status</span></th>
                <th><span>Amount</span></th>
              </tr>

              <tr>
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
    </div>
  )
}

export default CheckOutOrderDetails;
