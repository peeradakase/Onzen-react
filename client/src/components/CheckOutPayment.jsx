import { useState } from 'react';

function CheckOutPayment() {
  const [selectedPayment, setSelectedPayment] = useState('');

  return (
    <div>
      <h1 className="text-center m-t-50 m-l-30 m-r-30">Select Payment method</h1>
      <div className="item-center font-size-20 ">
        <form className="m-l-30 m-r-30 m-b-30">
          <div className="form-check m-t-20">
            <input className="form-check-input" type="radio" name="payment" id="bank-transfer" value={selectedPayment}
              onChange={(event) => { setSelectedPayment(event.target.value) }} />
            <label htmlFor="bank-transfer">
              Bank Transfer
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="payment" id="paypal" value={selectedPayment}
              onChange={(event) => { setSelectedPayment(event.target.value) }} />
            <label htmlFor="paypal">
              PayPal
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="payment" id="credit-card" value={selectedPayment}
              onChange={(event) => { setSelectedPayment(event.target.value) }} />
            <label htmlFor="credit-card">
              Credit Card
            </label>
          </div>
        </form>
      </div>
    </div>

  )
};
export default CheckOutPayment;
