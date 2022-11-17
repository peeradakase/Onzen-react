import { useState } from 'react';

function CheckOutPayment() {
  const [selectedPayment, setSelectedPayment] = useState('');

  return (
    <div>
      <h1 className="text-center m-t-50 m-l-30 m-r-30">Select Payment method</h1>
      <form className="text-center m-l-30 m-r-30">
        <input
          type="radio"
          name="payment"
          id="bank-transfer"
          value={selectedPayment} />
        <label for="bank-transfer">Bank Transfer</label>

        <input
          type="radio"
          name="payment"
          id="paypal"
          value={selectedPayment}
          onChange={(event) => { setSelectedPayment(event.target.value) }}
        />
        <label for="paypal">PayPal</label>

        <div></div>
        <input
          type="radio"
          name="payment"
          id="credit-card"
          value={selectedPayment}
          onChange={(event) => { setSelectedPayment(event.target.value) }}
        />
        <label for="credit-card">Credit Card</label>
      </form>
    </div>

  )
};
export default CheckOutPayment;
